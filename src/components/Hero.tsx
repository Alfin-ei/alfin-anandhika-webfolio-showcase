
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover-effect"
            >
              {t('hero.viewPortfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-primary text-primary px-8 py-3 rounded-lg hover-effect"
            >
              {t('hero.contactMe')}
            </button>
          </div>

          <div className="mt-12">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover-effect animate-bounce"
            >
              <ArrowDown size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
