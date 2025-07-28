import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, Globe, Leaf } from "lucide-react";
import appIcon from "@/assets/app-icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const languages = [
    { code: "en", name: "English" },
    { code: "ha", name: "Hausa" },
    { code: "yo", name: "Yoruba" },
    { code: "ig", name: "Igbo" },
  ];

  const translations = {
    en: {
      title: "AgroAssist Naija",
      subtitle: "Smart Agriculture for Nigerian Farmers",
      detection: "Disease Detection",
      weather: "Weather",
      calendar: "Crop Calendar",
      treatments: "Treatments",
    },
    ha: {
      title: "AgroAssist Naija",
      subtitle: "Teknolojiya Ta Noma Don Manoman Najeriya",
      detection: "Gano Cututtuka",
      weather: "Yanayi",
      calendar: "Kalandun Amfani",
      treatments: "Magunguna",
    },
    yo: {
      title: "AgroAssist Naija",
      subtitle: "Imọ-ẹrọ Ogbin Fun Awọn Agbe Naijiria",
      detection: "Wiwa Aisan",
      weather: "Oju-ojo",
      calendar: "Kalenda Oko",
      treatments: "Itọju",
    },
    ig: {
      title: "AgroAssist Naija", 
      subtitle: "Nkà Ọrụ Ugbo Maka Ndị Ọrụ Ugbo Naịjirịa",
      detection: "Nchọpụta Ọrịa",
      weather: "Ihu Igwe",
      calendar: "Kalenda Ihe Ọkụkụ",
      treatments: "Ọgwụgwọ",
    },
  };

  const currentTranslations = translations[currentLang as keyof typeof translations];

  return (
    <header className="bg-card shadow-medium sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary p-2 shadow-soft animate-pulse-glow">
              <Leaf className="w-full h-full text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{currentTranslations.title}</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">{currentTranslations.subtitle}</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="transition-smooth hover:bg-primary/10">
              {currentTranslations.detection}
            </Button>
            <Button variant="ghost" className="transition-smooth hover:bg-primary/10">
              {currentTranslations.weather}
            </Button>
            <Button variant="ghost" className="transition-smooth hover:bg-primary/10">
              {currentTranslations.calendar}
            </Button>
            <Button variant="ghost" className="transition-smooth hover:bg-primary/10">
              {currentTranslations.treatments}
            </Button>
          </nav>

          {/* Language Selector and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <div className="relative">
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center space-x-2"
                onClick={() => {
                  const currentIndex = languages.findIndex(lang => lang.code === currentLang);
                  const nextIndex = (currentIndex + 1) % languages.length;
                  setCurrentLang(languages[nextIndex].code);
                }}
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{languages.find(lang => lang.code === currentLang)?.name}</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <Card className="mt-4 p-4 md:hidden animate-grow">
            <nav className="flex flex-col space-y-3">
              <Button variant="ghost" className="justify-start transition-smooth hover:bg-primary/10">
                {currentTranslations.detection}
              </Button>
              <Button variant="ghost" className="justify-start transition-smooth hover:bg-primary/10">
                {currentTranslations.weather}
              </Button>
              <Button variant="ghost" className="justify-start transition-smooth hover:bg-primary/10">
                {currentTranslations.calendar}
              </Button>
              <Button variant="ghost" className="justify-start transition-smooth hover:bg-primary/10">
                {currentTranslations.treatments}
              </Button>
            </nav>
          </Card>
        )}
      </div>
    </header>
  );
};

export default Header;