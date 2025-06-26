
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto scroll-animate">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold manga-neon-text mb-4">{t('about.title')}</h2>
            <p className="text-xl text-white/80 font-medium">{t('about.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="speech-bubble p-8 mb-6 manga-interactive">
                <h3 className="text-2xl font-bold mb-4">{t('about.profileTitle')}</h3>
                <p className="mb-4 leading-relaxed font-medium">
                  {t('about.profileDesc1')}
                </p>
                <p className="leading-relaxed font-medium">
                  {t('about.profileDesc2')}
                </p>
              </div>
            </div>

            <div className="manga-card p-8 rounded-lg manga-interactive scroll-animate bg-black/40 backdrop-blur-sm">
              <h3 className="text-2xl font-bold manga-neon-text mb-6">{t('about.personalInfo')}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 manga-interactive">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="text-red-400" size={20} />
                  </div>
                  <span className="text-white font-semibold">27 Juli 2003</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 manga-interactive">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <span className="text-white font-semibold">Batam, Kepulauan Riau, Indonesia</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 manga-interactive">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-yellow-400" size={20} />
                  </div>
                  <span className="text-white font-semibold">anandhikaalfin@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 manga-interactive">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <span className="text-white font-semibold">+62 823-8397-3992</span>
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
