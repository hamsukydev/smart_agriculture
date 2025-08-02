import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, Globe, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages } from "@/lib/translations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();

  const currentLangData = languages.find(lang => lang.code === currentLanguage) || languages[0];

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
              <h1 className="text-xl font-bold text-foreground">{t.appTitle}</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">{t.appSubtitle}</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="transition-smooth hover:bg-primary/10">
              {t.diseaseDetection}
            </Button>
            <Button variant="ghost" className="transition-smooth hover:bg-primary/10">
              {t.weather}
            </Button>
            <Button variant="ghost" className="transition-smooth hover:bg-primary/10">
              {t.cropCalendar}
            </Button>
            <Button variant="ghost" className="transition-smooth hover:bg-primary/10">
              {t.treatments}
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
                  const currentIndex = languages.findIndex(lang => lang.code === currentLanguage);
                  const nextIndex = (currentIndex + 1) % languages.length;
                  setLanguage(languages[nextIndex].code);
                }}
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLangData.name}</span>
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
                {t.diseaseDetection}
              </Button>
              <Button variant="ghost" className="justify-start transition-smooth hover:bg-primary/10">
                {t.weather}
              </Button>
              <Button variant="ghost" className="justify-start transition-smooth hover:bg-primary/10">
                {t.cropCalendar}
              </Button>
              <Button variant="ghost" className="justify-start transition-smooth hover:bg-primary/10">
                {t.treatments}
              </Button>
            </nav>
          </Card>
        )}
      </div>
    </header>
  );
};

export default Header;