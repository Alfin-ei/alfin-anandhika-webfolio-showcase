
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
    <nav className={`fixed top-0 left-0 right-0 z-50 professional-nav transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            ALFIN ANANDHIKA
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
            >
              {t('nav.portfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
            >
              {t('nav.contact')}
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="glass-card px-3 py-2 professional-hover"
            >
              {theme === 'dark' ? 
                <Sun size={18} className="text-yellow-500" /> : 
                <Moon size={18} className="text-blue-500" />
              }
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="glass-card px-3 py-2 professional-hover flex items-center gap-2"
            >
              <Languages size={18} className="text-blue-500" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden professional-hover"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="glass-card p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 glass-card rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-left text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
              >
                {t('nav.skills')}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-left text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
              >
                {t('nav.portfolio')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground font-medium hover:text-blue-500 transition-colors professional-hover"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Controls */}
              <div className="flex gap-4 pt-2">
                <button
                  onClick={toggleTheme}
                  className="glass-card px-3 py-2 professional-hover"
                >
                  {theme === 'dark' ? 
                    <Sun size={18} className="text-yellow-500" /> : 
                    <Moon size={18} className="text-blue-500" />
                  }
                </button>
                
                <button
                  onClick={toggleLanguage}
                  className="glass-card px-3 py-2 professional-hover flex items-center gap-2"
                >
                  <Languages size={18} className="text-blue-500" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
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
