
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 deep-space-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold deep-space-text mb-4">{t('about.title')}</h2>
            <p className="text-lg text-gray-400">{t('about.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold deep-space-text mb-6">{t('about.profileTitle')}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('about.profileDesc1')}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('about.profileDesc2')}
              </p>
            </div>

            <div className="deep-space-surface p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-semibold deep-space-text mb-6">{t('about.personalInfo')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="deep-space-primary" size={20} />
                  <span className="text-gray-300">27 Juni 2003</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="deep-space-primary" size={20} />
                  <span className="text-gray-300">Batam, Kepulauan Riau, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="deep-space-primary" size={20} />
                  <span className="text-gray-300">anandhikaalfin@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="deep-space-primary" size={20} />
                  <span className="text-gray-300">+62 823-8397-3992</span>
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
