import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Camera, Upload, Loader2, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [detectionResult, setDetectionResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Mock detection results - in real app, this would call your AI API
  const mockDetectionResults = [
    {
      disease: "Late Blight",
      confidence: 92,
      severity: "High",
      crop: "Tomato",
      treatment: "Apply copper-based fungicide immediately. Remove affected leaves and improve air circulation.",
      prevention: "Plant resistant varieties, ensure proper spacing, and avoid overhead watering.",
      status: "critical"
    },
    {
      disease: "Healthy Plant",
      confidence: 96,
      severity: "None",
      crop: "Maize",
      treatment: "No treatment needed. Continue regular care.",
      prevention: "Maintain current practices. Monitor for any changes.",
      status: "healthy"
    },
    {
      disease: "Cassava Mosaic Disease",
      confidence: 88,
      severity: "Medium",
      crop: "Cassava",
      treatment: "Remove infected plants. Use virus-free planting material.",
      prevention: "Plant certified disease-free cuttings and control whitefly vectors.",
      status: "warning"
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setDetectionResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // In a real app, this would open camera interface
      toast({
        title: "Camera Feature",
        description: "Camera integration will be available in the mobile app version.",
      });
    } else {
      toast({
        title: "Camera Not Available",
        description: "Please use the upload option instead.",
        variant: "destructive",
      });
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Simulate AI analysis progress
    const progressInterval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Mock random result
          const randomResult = mockDetectionResults[Math.floor(Math.random() * mockDetectionResults.length)];
          setDetectionResult(randomResult);
          setIsAnalyzing(false);
          
          toast({
            title: "Analysis Complete",
            description: `Disease detection completed with ${randomResult.confidence}% confidence.`,
          });
          
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="w-6 h-6 text-success" />;
      case "warning":
        return <AlertTriangle className="w-6 h-6 text-warning" />;
      case "critical":
        return <AlertTriangle className="w-6 h-6 text-destructive" />;
      default:
        return <Info className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "border-success bg-success/5";
      case "warning":
        return "border-warning bg-warning/5";
      case "critical":
        return "border-destructive bg-destructive/5";
      default:
        return "border-border bg-card";
    }
  };

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Disease Detection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload or capture photos of your crops to get instant disease identification and treatment recommendations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="p-8 space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Upload Crop Image</h3>
              
              {selectedImage ? (
                <div className="space-y-4">
                  <img 
                    src={selectedImage} 
                    alt="Selected crop" 
                    className="w-full h-64 object-cover rounded-lg border border-border"
                  />
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => setSelectedImage(null)}
                      variant="outline"
                      className="flex-1"
                    >
                      Choose Different Image
                    </Button>
                    <Button 
                      onClick={analyzeImage}
                      disabled={isAnalyzing}
                      variant="plant"
                      className="flex-1"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        "Analyze Disease"
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-border rounded-lg p-12 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Take a clear photo of the affected crop leaves or upload an existing image.
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button 
                        onClick={() => fileInputRef.current?.click()}
                        variant="default"
                      >
                        <Upload className="w-4 h-4" />
                        Upload Image
                      </Button>
                      <Button 
                        onClick={handleCameraCapture}
                        variant="outline"
                      >
                        <Camera className="w-4 h-4" />
                        Use Camera
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {isAnalyzing && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Analyzing image...</span>
                  <span>{analysisProgress}%</span>
                </div>
                <Progress value={analysisProgress} className="h-2" />
                <p className="text-xs text-muted-foreground text-center">
                  AI is examining your crop for diseases and health indicators
                </p>
              </div>
            )}
          </Card>

          {/* Results Section */}
          <Card className={`p-8 ${detectionResult ? getStatusColor(detectionResult.status) : 'opacity-50'}`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                {detectionResult ? getStatusIcon(detectionResult.status) : <Info className="w-6 h-6 text-muted-foreground" />}
                <h3 className="text-xl font-semibold">
                  {detectionResult ? "Detection Results" : "Analysis Results Will Appear Here"}
                </h3>
              </div>

              {detectionResult ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Disease</p>
                      <p className="font-semibold">{detectionResult.disease}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Confidence</p>
                      <p className="font-semibold">{detectionResult.confidence}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Crop Type</p>
                      <p className="font-semibold">{detectionResult.crop}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Severity</p>
                      <p className="font-semibold">{detectionResult.severity}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Recommended Treatment</h4>
                      <p className="text-sm text-muted-foreground">{detectionResult.treatment}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Prevention Tips</h4>
                      <p className="text-sm text-muted-foreground">{detectionResult.prevention}</p>
                    </div>
                  </div>

                  <Button variant="success" className="w-full">
                    Save to My Farm Records
                  </Button>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <p>Upload an image to get started with AI disease detection.</p>
                  <p className="text-sm mt-2">Supported crops: Cassava, Maize, Yam, Tomato, and more.</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-12 p-6 bg-primary/5 border-primary/20">
          <h4 className="font-semibold text-primary mb-3">📸 Photo Tips for Best Results</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>• Take photos in good natural light</div>
            <div>• Focus on affected leaves or areas</div>
            <div>• Hold camera steady and close</div>
            <div>• Include multiple affected leaves</div>
            <div>• Avoid blurry or dark images</div>
            <div>• Show clear symptoms if present</div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DiseaseDetection;