
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih atas pesan Anda. Saya akan merespon segera.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Saya</h2>
            <p className="text-lg text-gray-600">Mari berkolaborasi atau sekadar ngobrol tentang web development!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mari Terhubung</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Saya selalu terbuka untuk diskusi tentang teknologi, kolaborasi project, atau bahkan 
                sekadar bertukar pengalaman sesama developer. Jangan ragu untuk menghubungi saya!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">anandhikaalfin@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">+62 823-8397-3992</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lokasi</p>
                    <p className="text-gray-600">Batam, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Waktu Terbaik untuk Dihubungi</h4>
                <p className="text-gray-600 text-sm">
                  Senin - Jumat: 09:00 - 17:00 WIB<br />
                  Sabtu: 10:00 - 15:00 WIB<br />
                  Response time: Maksimal 24 jam
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center border-t border-gray-200 pt-8">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Alfin Anandhika</h4>
              <p className="text-gray-600">Web Developer Pemula | Batam, Indonesia</p>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 Alfin Anandhika. Dibuat dengan ❤️ menggunakan React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
