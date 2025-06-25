
import { ArrowDown, Code, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center deep-space-bg pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full neon-gradient flex items-center justify-center neon-glow-blue">
              <Code size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold deep-space-text mb-4">
              Hi, I'm <span className="neon-gradient bg-clip-text text-transparent">Alfin</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3 neon-gradient text-white rounded-lg font-semibold hover:neon-glow-pink transform hover:scale-105 transition-all duration-200"
            >
              {t('hero.viewPortfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 neon-cyan rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
              style={{ borderColor: 'var(--neon-cyan)', color: 'var(--neon-cyan)' }}
            >
              {t('hero.contactMe')}
            </button>
          </div>

          <div className="flex justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Coffee size={20} className="neon-cyan" />
              <span>{t('hero.fueledByCoffee')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={20} className="neon-pink" />
              <span>{t('hero.passionateCoder')}</span>
            </div>
          </div>

          <div className="mt-12 animate-bounce">
            <button onClick={() => scrollToSection('about')}>
              <ArrowDown size={24} className="text-gray-400 hover:neon-cyan transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
