
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
    <nav className="fixed top-0 left-0 right-0 z-50 manga-nav">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold manga-text-gradient">
            ALFIN • ANANDHIKA
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
              {t('nav.portfolio')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
              {t('nav.contact')}
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="manga-card px-3 py-2 rounded-lg bg-black/50 hover:bg-red-500/20 transition-colors manga-interactive"
            >
              {theme === 'light' ? <Moon size={18} className="text-cyan-400" /> : <Sun size={18} className="text-yellow-400" />}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="manga-card px-3 py-2 rounded-lg bg-black/50 hover:bg-red-500/20 transition-colors manga-interactive flex items-center gap-2"
            >
              <Languages size={18} className="text-red-400" />
              <span className="text-sm font-bold text-white">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white manga-interactive"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="manga-card p-2 rounded-lg bg-black/50">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t-2 border-red-500">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
                {t('nav.skills')}
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
                {t('nav.portfolio')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-white font-semibold hover:text-red-400 transition-colors manga-interactive uppercase tracking-wider">
                {t('nav.contact')}
              </button>
              
              {/* Mobile Controls */}
              <div className="flex gap-4 pt-2">
                <button
                  onClick={toggleTheme}
                  className="manga-card px-3 py-2 rounded-lg bg-black/50 hover:bg-red-500/20 transition-colors manga-interactive"
                >
                  {theme === 'light' ? <Moon size={18} className="text-cyan-400" /> : <Sun size={18} className="text-yellow-400" />}
                </button>
                
                <button
                  onClick={toggleLanguage}
                  className="manga-card px-3 py-2 rounded-lg bg-black/50 hover:bg-red-500/20 transition-colors manga-interactive flex items-center gap-2"
                >
                  <Languages size={18} className="text-red-400" />
                  <span className="text-sm font-bold text-white">{language.toUpperCase()}</span>
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
