
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-on-scroll">
            {/* Professional Avatar */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full gradient-primary flex items-center justify-center glass-card professional-hover relative overflow-hidden">
              <Code size={50} className="text-white relative z-10" />
            </div>
            
            {/* Professional Introduction */}
            <div className="glass-card p-6 mb-8 mx-auto max-w-md professional-hover">
              <h1 className="text-2xl font-bold mb-2 text-foreground">
                Hello, I'm <span className="gradient-text">ALFIN</span>
              </h1>
              <div className="flex items-center justify-center gap-2">
                <Zap size={18} className="text-blue-500" />
                <span className="font-medium text-foreground">Full Stack Developer</span>
                <Zap size={18} className="text-blue-500" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-slide-left">
              {t('hero.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium animate-slide-right">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-scale">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="btn-primary professional-hover"
            >
              {t('hero.viewPortfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary professional-hover"
            >
              {t('hero.contactMe')}
            </button>
          </div>

          {/* Professional Status Cards */}
          <div className="flex justify-center items-center gap-8 text-muted-foreground mb-8 animate-on-scroll">
            <div className="glass-card px-6 py-3 professional-hover">
              <div className="flex items-center gap-3">
                <Coffee size={20} className="text-orange-500" />
                <span className="font-medium text-foreground">{t('hero.fueledByCoffee')}</span>
              </div>
            </div>
            <div className="glass-card px-6 py-3 professional-hover">
              <div className="flex items-center gap-3">
                <Code size={20} className="text-blue-500" />
                <span className="font-medium text-foreground">{t('hero.passionateCoder')}</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 animate-on-scroll">
            <button 
              onClick={() => scrollToSection('about')} 
              className="professional-hover animate-bounce"
            >
              <div className="glass-card p-3 rounded-full">
                <ArrowDown size={24} className="text-blue-500" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
