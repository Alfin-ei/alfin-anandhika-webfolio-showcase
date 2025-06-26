
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('about.title')}</h2>
            <p className="text-xl text-muted-foreground font-medium">{t('about.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <div className="glass-card p-8 mb-6 professional-hover">
                <h3 className="text-2xl font-bold mb-4 gradient-text">{t('about.profileTitle')}</h3>
                <p className="mb-4 leading-relaxed font-medium text-foreground">
                  {t('about.profileDesc1')}
                </p>
                <p className="leading-relaxed font-medium text-foreground">
                  {t('about.profileDesc2')}
                </p>
              </div>
            </div>

            <div className="glass-card p-8 professional-hover animate-slide-right">
              <h3 className="text-2xl font-bold gradient-text mb-6">{t('about.personalInfo')}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg glass-card professional-hover">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <span className="text-foreground font-semibold">27 Juli 2003</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg glass-card professional-hover">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <span className="text-foreground font-semibold">Batam, Kepulauan Riau, Indonesia</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg glass-card professional-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <span className="text-foreground font-semibold">anandhikaalfin@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg glass-card professional-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <span className="text-foreground font-semibold">+62 823-8397-3992</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
