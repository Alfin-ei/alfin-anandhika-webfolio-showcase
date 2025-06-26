
import { ArrowDown, Code, Coffee, Zap } from 'lucide-react';
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
            {/* Manga Style Avatar */}
            <div className="w-40 h-40 mx-auto mb-8 rounded-full manga-gradient flex items-center justify-center manga-card manga-interactive relative overflow-hidden">
              <Code size={60} className="text-white relative z-10" />
              <div className="absolute inset-0 bg-black/20 rounded-full"></div>
            </div>
            
            {/* Manga Speech Bubble Intro */}
            <div className="speech-bubble p-6 mb-8 mx-auto max-w-md manga-interactive">
              <h1 className="text-3xl font-bold mb-2">
                Yo! I'm <span className="manga-text-gradient">ALFIN</span>
              </h1>
              <div className="flex items-center justify-center gap-2">
                <Zap size={20} className="text-red-500" />
                <span className="font-semibold">Ready to Code!</span>
                <Zap size={20} className="text-red-500" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold manga-neon-text mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 manga-button rounded-lg font-bold manga-interactive text-lg"
            >
              {t('hero.viewPortfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent text-white rounded-lg font-bold manga-interactive border-3 border-white hover:bg-white hover:text-black transition-all duration-300 text-lg"
            >
              {t('hero.contactMe')}
            </button>
          </div>

          {/* Manga Style Status Bar */}
          <div className="flex justify-center items-center gap-8 text-white/80 mb-8">
            <div className="manga-card px-4 py-2 rounded-full bg-black/80 backdrop-blur-sm manga-interactive">
              <div className="flex items-center gap-2">
                <Coffee size={20} className="text-yellow-400" />
                <span className="font-semibold text-white">{t('hero.fueledByCoffee')}</span>
              </div>
            </div>
            <div className="manga-card px-4 py-2 rounded-full bg-black/80 backdrop-blur-sm manga-interactive">
              <div className="flex items-center gap-2">
                <Code size={20} className="text-cyan-400" />
                <span className="font-semibold text-white">{t('hero.passionateCoder')}</span>
              </div>
            </div>
          </div>

          {/* Animated Arrow */}
          <div className="mt-12">
            <button 
              onClick={() => scrollToSection('about')} 
              className="manga-interactive animate-bounce"
            >
              <div className="manga-card p-3 rounded-full bg-red-500/20 backdrop-blur-sm">
                <ArrowDown size={24} className="text-red-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
