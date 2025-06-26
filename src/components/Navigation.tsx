import { useState, useEffect } from 'react';
import { Menu, X, Languages, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-foreground">
            ALFIN ANANDHIKA
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors hover-effect"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors hover-effect"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-foreground hover:text-primary transition-colors hover-effect"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-foreground hover:text-primary transition-colors hover-effect"
            >
              {t('nav.portfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors hover-effect"
            >
              {t('nav.contact')}
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 hover-effect"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 p-2 hover-effect"
            >
              <Languages size={18} />
              <span className="text-sm">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden hover-effect"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-foreground hover:text-primary transition-colors hover-effect"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground hover:text-primary transition-colors hover-effect"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-left text-foreground hover:text-primary transition-colors hover-effect"
              >
                {t('nav.skills')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-left text-foreground hover:text-primary transition-colors hover-effect"
              >
                {t('nav.portfolio')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-primary transition-colors hover-effect"
              >
                {t('nav.contact')}
              </button>
              
              <div className="flex gap-4 pt-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 hover-effect"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 p-2 hover-effect"
                >
                  <Languages size={18} />
                  <span className="text-sm">{language.toUpperCase()}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
