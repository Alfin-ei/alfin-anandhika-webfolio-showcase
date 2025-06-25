
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
            <p className="text-lg text-gray-600">{t('about.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('about.profileTitle')}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('about.profileDesc1')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('about.profileDesc2')}
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('about.personalInfo')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-600" size={20} />
                  <span className="text-gray-700">27 Juni 2003</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">Batam, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-gray-700">anandhikaalfin@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <span className="text-gray-700">+62 823-8397-3992</span>
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
