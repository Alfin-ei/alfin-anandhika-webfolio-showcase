
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Alfin Anandhika
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
