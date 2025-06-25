
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen deep-space-bg">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
