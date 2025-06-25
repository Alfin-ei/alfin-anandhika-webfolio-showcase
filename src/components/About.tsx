
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Saya</h2>
            <p className="text-lg text-gray-600">Kenali lebih dekat profil dan perjalanan saya</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Profil Singkat</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Halo! Saya Alfin Anandhika, seorang web developer pemula yang penuh semangat untuk belajar dan berkembang. 
                Meskipun masih di tahap awal karir, saya memiliki dedikasi tinggi untuk menguasai teknologi web modern 
                dan siap menghadapi tantangan baru dalam dunia programming.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Saya percaya bahwa setiap expert pernah menjadi pemula, dan saya berkomitmen untuk terus belajar, 
                berlatih, dan mengembangkan skill saya setiap hari. Dengan mindset growth dan keingintahuan yang tinggi, 
                saya yakin dapat berkontribusi positif dalam setiap proyek yang saya kerjakan.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informasi Personal</h3>
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
