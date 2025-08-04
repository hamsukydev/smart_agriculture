export interface DiseaseResult {
  name: string;
  confidence: number;
  severity: 'healthy' | 'warning' | 'critical';
  treatment: string;
  prevention: string;
}

class DiseaseDetectionService {
  async detectDisease(imageFile: File): Promise<DiseaseResult> {
    try {
      // Convert file to base64
      const base64 = await this.fileToBase64(imageFile);
      
      // Call our Supabase Edge Function
      const response = await fetch('/functions/v1/detect-disease', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: base64
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      return result as DiseaseResult;
    } catch (error) {
      console.error('Error in disease detection:', error);
      throw new Error('Failed to analyze image. Please try again.');
    }
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data:image/...;base64, prefix
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

}

export const diseaseDetectionService = new DiseaseDetectionService();