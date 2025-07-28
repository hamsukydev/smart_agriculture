import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiseaseDetection from "@/components/DiseaseDetection";
import WeatherDashboard from "@/components/WeatherDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header />
      <main>
        <HeroSection />
        <DiseaseDetection />
        <WeatherDashboard />
      </main>
    </div>
  );
};

export default Index;