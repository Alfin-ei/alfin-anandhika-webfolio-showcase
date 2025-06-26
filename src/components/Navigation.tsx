
import { useState } from 'react';
import { Menu, X, Languages, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold glass-text">
            Alfin Anandhika
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white/90 hover:text-white transition-colors interactive">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-white transition-colors interactive">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-white/90 hover:text-white transition-colors interactive">
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white/90 hover:text-white transition-colors interactive">
              {t('nav.portfolio')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white/90 hover:text-white transition-colors interactive">
              {t('nav.contact')}
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card hover:bg-white/10 transition-colors interactive"
            >
              {theme === 'light' ? <Moon size={16} className="text-purple-300" /> : <Sun size={16} className="text-yellow-300" />}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card hover:bg-white/10 transition-colors interactive"
            >
              <Languages size={16} className="text-blue-300" />
              <span className="text-sm font-medium text-white">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white interactive"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-white/90 hover:text-white transition-colors interactive">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-white/90 hover:text-white transition-colors interactive">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-white/90 hover:text-white transition-colors interactive">
                {t('nav.skills')}
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-white/90 hover:text-white transition-colors interactive">
                {t('nav.portfolio')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-white/90 hover:text-white transition-colors interactive">
                {t('nav.contact')}
              </button>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card hover:bg-white/10 transition-colors w-fit interactive"
              >
                {theme === 'light' ? <Moon size={16} className="text-purple-300" /> : <Sun size={16} className="text-yellow-300" />}
                <span className="text-sm font-medium text-white">{theme === 'light' ? 'Dark' : 'Light'}</span>
              </button>
              
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card hover:bg-white/10 transition-colors w-fit interactive"
              >
                <Languages size={16} className="text-blue-300" />
                <span className="text-sm font-medium text-white">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
