import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Cloud, Calendar, Book, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: Camera,
      title: "AI Disease Detection",
      description: "Upload crop photos for instant disease identification",
      color: "bg-success/10 text-success",
    },
    {
      icon: Cloud,
      title: "Weather Insights",
      description: "Real-time weather data and crop care recommendations",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Calendar,
      title: "Smart Calendar",
      description: "AI-powered planting schedules for Nigerian seasons",
      color: "bg-warning/10 text-warning",
    },
    {
      icon: Book,
      title: "Treatment Library",
      description: "Disease-specific remedies and prevention guides",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-grow">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary font-medium">
                <Sparkles className="w-5 h-5" />
                <span>AI-Powered Agriculture</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Smart Farming for
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Nigerian </span>
                Agriculture
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Detect crop diseases instantly, get weather insights, and optimize your harvest with AI technology designed specifically for Nigerian farmers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="shadow-glow">
                Start Disease Detection
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="shadow-soft">
                View Weather Forecast
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground">50,000+</div>
                <div>Farmers Helped</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">95%</div>
                <div>Detection Accuracy</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">4</div>
                <div>Languages Supported</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-float">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-smooth hover:scale-105 bg-card/80 backdrop-blur-sm border border-border/50">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Trusted by farmers across Nigeria</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {["Lagos", "Kano", "Rivers", "Kaduna"].map((state) => (
              <div key={state} className="text-center">
                <div className="h-12 bg-muted rounded-lg flex items-center justify-center mb-2">
                  <span className="font-semibold text-muted-foreground">{state}</span>
                </div>
                <p className="text-sm text-muted-foreground">State</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;