
import { ArrowDown, Code, Coffee } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
              <Code size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Alfin</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Web Developer Pemula
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Seorang developer muda yang bersemangat belajar dan mengembangkan kemampuan dalam dunia web development. 
              Siap untuk menghadapi tantangan baru dan berkontribusi dalam proyek-proyek menarik.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Lihat Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Hubungi Saya
            </button>
          </div>

          <div className="flex justify-center items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Coffee size={20} />
              <span>Fueled by Coffee</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={20} />
              <span>Passionate Coder</span>
            </div>
          </div>

          <div className="mt-12 animate-bounce">
            <button onClick={() => scrollToSection('about')}>
              <ArrowDown size={24} className="text-gray-400 hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
