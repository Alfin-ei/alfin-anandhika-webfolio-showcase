
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
    <nav className="fixed top-0 left-0 right-0 z-50 deep-space-surface/90 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold deep-space-gradient bg-clip-text text-transparent">
            Alfin Anandhika
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="deep-space-text hover:text-purple-400 transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="deep-space-text hover:text-purple-400 transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('skills')} className="deep-space-text hover:text-purple-400 transition-colors">
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="deep-space-text hover:text-purple-400 transition-colors">
              {t('nav.portfolio')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="deep-space-text hover:text-purple-400 transition-colors">
              {t('nav.contact')}
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-lg deep-space-surface hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon size={16} className="deep-space-accent" /> : <Sun size={16} className="deep-space-accent" />}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg deep-space-surface hover:bg-gray-700 transition-colors"
            >
              <Languages size={16} className="deep-space-accent" />
              <span className="text-sm font-medium deep-space-text">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden deep-space-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left deep-space-text hover:text-purple-400 transition-colors">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left deep-space-text hover:text-purple-400 transition-colors">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left deep-space-text hover:text-purple-400 transition-colors">
                {t('nav.skills')}
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left deep-space-text hover:text-purple-400 transition-colors">
                {t('nav.portfolio')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left deep-space-text hover:text-purple-400 transition-colors">
                {t('nav.contact')}
              </button>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-lg deep-space-surface hover:bg-gray-700 transition-colors w-fit"
              >
                {theme === 'light' ? <Moon size={16} className="deep-space-accent" /> : <Sun size={16} className="deep-space-accent" />}
                <span className="text-sm font-medium deep-space-text">{theme === 'light' ? 'Dark' : 'Light'}</span>
              </button>
              
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg deep-space-surface hover:bg-gray-700 transition-colors w-fit"
              >
                <Languages size={16} className="deep-space-accent" />
                <span className="text-sm font-medium deep-space-text">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
