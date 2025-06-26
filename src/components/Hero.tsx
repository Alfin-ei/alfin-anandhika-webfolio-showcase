
import { ArrowDown, Code, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto scroll-animate">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full neon-gradient flex items-center justify-center glass-card interactive">
              <Code size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold glass-text mb-4">
              Hi, I'm <span className="neon-gradient bg-clip-text text-transparent">Alfin</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/80 mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3 neon-gradient text-white rounded-lg font-semibold glass-card interactive"
            >
              {t('hero.viewPortfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 glass-card text-white rounded-lg font-semibold interactive border border-white/20"
            >
              {t('hero.contactMe')}
            </button>
          </div>

          <div className="flex justify-center items-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <Coffee size={20} className="text-blue-300" />
              <span>{t('hero.fueledByCoffee')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={20} className="text-purple-300" />
              <span>{t('hero.passionateCoder')}</span>
            </div>
          </div>

          <div className="mt-12 animate-bounce">
            <button onClick={() => scrollToSection('about')} className="interactive">
              <ArrowDown size={24} className="text-white/60 hover:text-white/80 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
