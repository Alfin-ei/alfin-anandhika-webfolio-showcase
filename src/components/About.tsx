
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('about.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('about.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-card p-8 rounded-lg shadow-lg hover-effect">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{t('about.profileTitle')}</h3>
                <p className="mb-4 text-muted-foreground">
                  {t('about.profileDesc1')}
                </p>
                <p className="text-muted-foreground">
                  {t('about.profileDesc2')}
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg hover-effect">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('about.personalInfo')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 hover-effect">
                  <Calendar className="text-primary" size={20} />
                  <span className="text-foreground">27 Juli 2003</span>
                </div>
                <div className="flex items-center gap-4 hover-effect">
                  <MapPin className="text-primary" size={20} />
                  <span className="text-foreground">Batam, Kepulauan Riau, Indonesia</span>
                </div>
                <div className="flex items-center gap-4 hover-effect">
                  <Mail className="text-primary" size={20} />
                  <span className="text-foreground">anandhikaalfin@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 hover-effect">
                  <Phone className="text-primary" size={20} />
                  <span className="text-foreground">+62 823-8397-3992</span>
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
