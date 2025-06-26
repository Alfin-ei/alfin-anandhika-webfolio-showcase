
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto scroll-animate">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold glass-text mb-4">{t('about.title')}</h2>
            <p className="text-lg text-white/70">{t('about.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h3 className="text-2xl font-semibold text-white mb-6">{t('about.profileTitle')}</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t('about.profileDesc1')}
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t('about.profileDesc2')}
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg interactive scroll-animate">
              <h3 className="text-2xl font-semibold text-white mb-6">{t('about.personalInfo')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-300" size={20} />
                  <span className="text-white/80">27 Juli 2003</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-300" size={20} />
                  <span className="text-white/80">Batam, Kepulauan Riau, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-300" size={20} />
                  <span className="text-white/80">anandhikaalfin@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-green-300" size={20} />
                  <span className="text-white/80">+62 823-8397-3992</span>
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
