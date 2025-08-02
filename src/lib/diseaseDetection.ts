import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = true;

export interface DiseaseResult {
  name: string;
  confidence: number;
  severity: 'healthy' | 'warning' | 'critical';
  treatment: string;
  prevention: string;
}

class DiseaseDetectionService {
  private classifier: any = null;
  private isLoading = false;

  async initialize() {
    if (this.classifier || this.isLoading) return;
    
    this.isLoading = true;
    try {
      console.log('Initializing plant disease detection model...');
      this.classifier = await pipeline(
        'image-classification',
        'gautamhans1/plant-disease-detection',
        { device: 'webgpu' }
      );
      console.log('Model initialized successfully');
    } catch (error) {
      console.error('Error initializing model:', error);
      // Fallback to CPU if WebGPU fails
      try {
        this.classifier = await pipeline(
          'image-classification',
          'gautamhans1/plant-disease-detection'
        );
        console.log('Model initialized successfully with CPU fallback');
      } catch (cpuError) {
        console.error('Error initializing model with CPU:', cpuError);
        throw new Error('Failed to initialize disease detection model');
      }
    } finally {
      this.isLoading = false;
    }
  }

  async detectDisease(imageFile: File): Promise<DiseaseResult> {
    await this.initialize();
    
    if (!this.classifier) {
      throw new Error('Model not initialized');
    }

    try {
      // Convert file to image URL for the model
      const imageUrl = URL.createObjectURL(imageFile);
      
      console.log('Analyzing image for disease detection...');
      const results = await this.classifier(imageUrl);
      
      // Clean up the URL
      URL.revokeObjectURL(imageUrl);
      
      console.log('Raw classification results:', results);
      
      if (!results || results.length === 0) {
        throw new Error('No classification results received');
      }

      // Get the top prediction
      const topResult = results[0];
      const diseaseName = this.formatDiseaseName(topResult.label);
      const confidence = Math.round(topResult.score * 100);
      
      // Determine severity based on disease type and confidence
      const severity = this.determineSeverity(topResult.label, confidence);
      
      // Get treatment and prevention based on disease
      const { treatment, prevention } = this.getTreatmentInfo(topResult.label);

      return {
        name: diseaseName,
        confidence,
        severity,
        treatment,
        prevention
      };
    } catch (error) {
      console.error('Error during disease detection:', error);
      throw new Error('Failed to analyze image. Please try again.');
    }
  }

  private formatDiseaseName(label: string): string {
    // Clean up the label to make it more readable
    return label
      .replace(/_/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  private determineSeverity(label: string, confidence: number): 'healthy' | 'warning' | 'critical' {
    const lowerLabel = label.toLowerCase();
    
    // Check if it's a healthy classification
    if (lowerLabel.includes('healthy') || lowerLabel.includes('normal')) {
      return 'healthy';
    }
    
    // Critical diseases (high impact)
    const criticalDiseases = [
      'blight', 'wilt', 'rot', 'canker', 'mosaic', 'virus', 'bacterial'
    ];
    
    const isCritical = criticalDiseases.some(disease => 
      lowerLabel.includes(disease)
    );
    
    if (isCritical && confidence > 70) {
      return 'critical';
    } else if (isCritical || confidence > 60) {
      return 'warning';
    }
    
    return 'warning';
  }

  private getTreatmentInfo(label: string): { treatment: string; prevention: string } {
    const lowerLabel = label.toLowerCase();
    
    // Healthy plant
    if (lowerLabel.includes('healthy') || lowerLabel.includes('normal')) {
      return {
        treatment: 'No treatment needed. Continue regular care and monitoring.',
        prevention: 'Maintain good agricultural practices: proper spacing, adequate nutrition, and regular inspection.'
      };
    }

    // Fungal diseases
    if (lowerLabel.includes('blight') || lowerLabel.includes('rust') || lowerLabel.includes('mildew')) {
      return {
        treatment: 'Apply fungicide spray (copper-based or organic neem oil). Remove affected leaves and improve air circulation.',
        prevention: 'Ensure proper plant spacing, avoid overhead watering, and apply preventive fungicide treatments during humid conditions.'
      };
    }

    // Bacterial diseases
    if (lowerLabel.includes('bacterial') || lowerLabel.includes('canker')) {
      return {
        treatment: 'Remove and destroy affected plant parts. Apply copper-based bactericide. Improve drainage and reduce humidity.',
        prevention: 'Use disease-free seeds, practice crop rotation, avoid overhead irrigation, and maintain proper plant hygiene.'
      };
    }

    // Viral diseases
    if (lowerLabel.includes('virus') || lowerLabel.includes('mosaic')) {
      return {
        treatment: 'No cure for viral diseases. Remove infected plants to prevent spread. Control vector insects.',
        prevention: 'Use virus-free seeds, control aphids and other vector insects, practice crop rotation, and maintain field hygiene.'
      };
    }

    // Nutrient deficiencies
    if (lowerLabel.includes('deficiency') || lowerLabel.includes('chlorosis')) {
      return {
        treatment: 'Apply appropriate fertilizer based on soil test. For nitrogen deficiency, use urea or compost.',
        prevention: 'Regular soil testing, balanced fertilization, and proper pH management (6.0-7.0 for most crops).'
      };
    }

    // Default treatment for unknown diseases
    return {
      treatment: 'Consult with local agricultural extension officer. Remove affected plant parts and improve general plant health.',
      prevention: 'Practice good agricultural hygiene: crop rotation, proper spacing, balanced nutrition, and regular monitoring.'
    };
  }
}

export const diseaseDetectionService = new DiseaseDetectionService();