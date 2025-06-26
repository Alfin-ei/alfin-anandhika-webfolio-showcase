
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import CursorAnimation from '@/components/CursorAnimation';
import ScrollAnimations from '@/components/ScrollAnimations';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen relative">
          <BackgroundAnimation />
          <CursorAnimation />
          <ScrollAnimations />
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
