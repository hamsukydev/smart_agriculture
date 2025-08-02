import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Camera, Upload, Loader2, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { diseaseDetectionService, DiseaseResult } from "@/lib/diseaseDetection";

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [detectionResult, setDetectionResult] = useState<DiseaseResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { t } = useLanguage();


  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
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
        title: t.loading,
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
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setDetectionResult(null);

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setAnalysisProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 15;
        });
      }, 500);

      // Perform real AI analysis
      const result = await diseaseDetectionService.detectDisease(selectedFile);
      
      clearInterval(progressInterval);
      setAnalysisProgress(100);
      setDetectionResult(result);
      
      toast({
        title: t.success,
        description: `${t.diseaseDetectionTitle} completed with ${result.confidence}% ${t.confidence.toLowerCase()}.`,
      });
      
    } catch (error) {
      console.error('Disease detection error:', error);
      toast({
        title: t.error,
        description: error instanceof Error ? error.message : "Failed to analyze image",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getStatusIcon = (severity: string) => {
    switch (severity) {
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

  const getStatusColor = (severity: string) => {
    switch (severity) {
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
            {t.diseaseDetectionTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.diseaseDetectionDesc}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="p-8 space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">{t.uploadImage}</h3>
              
              {selectedImage ? (
                <div className="space-y-4">
                  <img 
                    src={selectedImage} 
                    alt="Selected crop" 
                    className="w-full h-64 object-cover rounded-lg border border-border"
                  />
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => {
                        setSelectedImage(null);
                        setSelectedFile(null);
                      }}
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
                          {t.analyzing}...
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
                        {t.uploadImage}
                      </Button>
                      <Button 
                        onClick={handleCameraCapture}
                        variant="outline"
                      >
                        <Camera className="w-4 h-4" />
                        {t.useCamera}
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
                  <span>{t.analyzing}...</span>
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
          <Card className={`p-8 ${detectionResult ? getStatusColor(detectionResult.severity) : 'opacity-50'}`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                {detectionResult ? getStatusIcon(detectionResult.severity) : <Info className="w-6 h-6 text-muted-foreground" />}
                <h3 className="text-xl font-semibold">
                  {detectionResult ? t.diseaseResults : "Analysis Results Will Appear Here"}
                </h3>
              </div>

              {detectionResult ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Disease</p>
                      <p className="font-semibold">{detectionResult.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.confidence}</p>
                      <p className="font-semibold">{detectionResult.confidence}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t.severity}</p>
                      <p className="font-semibold">
                        {detectionResult.severity === 'healthy' ? t.healthy : 
                         detectionResult.severity === 'warning' ? t.warning : t.critical}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t.treatment}</h4>
                      <p className="text-sm text-muted-foreground">{detectionResult.treatment}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t.prevention}</h4>
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
          <h4 className="font-semibold text-primary mb-3">📸 {t.photoTipsTitle}</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            {t.photoTips.map((tip, index) => (
              <div key={index}>• {tip}</div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DiseaseDetection;