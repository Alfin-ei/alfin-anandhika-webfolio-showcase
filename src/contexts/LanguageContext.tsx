
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'id' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Web Developer Pemula',
    'hero.description': 'Seorang developer muda yang bersemangat belajar dan mengembangkan kemampuan dalam dunia web development. Siap untuk menghadapi tantangan baru dan berkontribusi dalam proyek-proyek menarik.',
    'hero.viewPortfolio': 'Lihat Portfolio',
    'hero.contactMe': 'Hubungi Saya',
    'hero.fueledByCoffee': 'Fueled by Coffee',
    'hero.passionateCoder': 'Passionate Coder',
    
    // About Section
    'about.title': 'Tentang Saya',
    'about.subtitle': 'Kenali lebih dekat profil dan perjalanan saya',
    'about.profileTitle': 'Profil Singkat',
    'about.profileDesc1': 'Halo! Saya Alfin Anandhika, seorang web developer pemula yang penuh semangat untuk belajar dan berkembang. Meskipun masih di tahap awal karir, saya memiliki dedikasi tinggi untuk menguasai teknologi web modern dan siap menghadapi tantangan baru dalam dunia programming.',
    'about.profileDesc2': 'Saya percaya bahwa setiap expert pernah menjadi pemula, dan saya berkomitmen untuk terus belajar, berlatih, dan mengembangkan skill saya setiap hari. Dengan mindset growth dan keingintahuan yang tinggi, saya yakin dapat berkontribusi positif dalam setiap proyek yang saya kerjakan.',
    'about.personalInfo': 'Informasi Personal',
    
    // Skills Section
    'skills.title': 'Skills & Kemampuan',
    'skills.subtitle': 'Hal-hal yang sedang saya pelajari dan kembangkan',
    'skills.htmlCss': 'HTML & CSS',
    'skills.javascript': 'JavaScript',
    'skills.react': 'React',
    'skills.tools': 'Tools',
    'skills.learning': 'Sedang Dipelajari',
    'skills.softSkills': 'Soft Skills',
    'skills.level.belajar': 'Belajar',
    'skills.level.pemula': 'Pemula',
    'skills.level.baruBelajar': 'Baru Belajar',
    'skills.level.familiar': 'Familiar',
    'skills.level.dalamProses': 'Dalam Proses',
    'skills.level.terusBerkembang': 'Terus Berkembang',
    'skills.disclaimer.title': 'Honest Disclaimer',
    'skills.disclaimer.desc1': 'Saya masih dalam tahap belajar dan belum expert di bidang apapun. Yang saya miliki adalah semangat tinggi untuk belajar, kemampuan googling yang baik, dan kemauan untuk mencoba hal-hal baru.',
    'skills.disclaimer.desc2': 'Saya percaya bahwa setiap expert pernah menjadi pemula. Dengan konsistensi belajar setiap hari, membaca dokumentasi, dan mengerjakan project kecil-kecil, saya yakin akan terus berkembang. Learning never stops! 🚀',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Project-project yang sedang dan akan saya kerjakan',
    'portfolio.developmentTitle': 'Portfolio Dalam Pengembangan',
    'portfolio.developmentDesc': 'Sebagai developer pemula, portfolio saya masih dalam tahap pengembangan. Saya terus mengerjakan project-project baru untuk mengasah skill dan menambah pengalaman. Setiap project adalah kesempatan belajar yang berharga bagi saya.',
    'portfolio.completed': 'Project Completed',
    'portfolio.inProgress': 'Project In Progress',
    'portfolio.planned': 'Project Planned',
    
    // Contact Section
    'contact.title': 'Hubungi Saya',
    'contact.subtitle': 'Mari berkolaborasi atau sekadar ngobrol tentang web development!',
    'contact.connectTitle': 'Mari Terhubung',
    'contact.connectDesc': 'Saya selalu terbuka untuk diskusi tentang teknologi, kolaborasi project, atau bahkan sekadar bertukar pengalaman sesama developer. Jangan ragu untuk menghubungi saya!',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.location': 'Lokasi',
    'contact.bestTime': 'Waktu Terbaik untuk Dihubungi',
    'contact.schedule': 'Senin - Jumat: 09:00 - 17:00 WIB\nSabtu: 10:00 - 15:00 WIB\nResponse time: Maksimal 24 jam',
    'contact.sendMessage': 'Kirim Pesan',
    'contact.name': 'Nama Lengkap',
    'contact.namePlaceholder': 'Masukkan nama lengkap Anda',
    'contact.emailPlaceholder': 'nama@email.com',
    'contact.message': 'Pesan',
    'contact.messagePlaceholder': 'Tulis pesan Anda di sini...',
    'contact.send': 'Kirim Pesan',
    'contact.footer': 'Web Developer Pemula | Batam, Indonesia',
    'contact.copyright': '© 2024 Alfin Anandhika. Dibuat dengan ❤️ menggunakan React & Tailwind CSS'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Beginner Web Developer',
    'hero.description': 'A passionate young developer eager to learn and grow in web development. Ready to face new challenges and contribute to exciting projects.',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.contactMe': 'Contact Me',
    'hero.fueledByCoffee': 'Fueled by Coffee',
    'hero.passionateCoder': 'Passionate Coder',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know my profile and journey',
    'about.profileTitle': 'Brief Profile',
    'about.profileDesc1': 'Hello! I\'m Alfin Anandhika, a passionate beginner web developer eager to learn and grow. Although still in the early stages of my career, I have high dedication to master modern web technologies and ready to face new challenges in the programming world.',
    'about.profileDesc2': 'I believe that every expert was once a beginner, and I am committed to continuously learning, practicing, and developing my skills every day. With a growth mindset and high curiosity, I am confident that I can contribute positively to every project I work on.',
    'about.personalInfo': 'Personal Information',
    
    // Skills Section
    'skills.title': 'Skills & Abilities',
    'skills.subtitle': 'Things I am currently learning and developing',
    'skills.htmlCss': 'HTML & CSS',
    'skills.javascript': 'JavaScript',
    'skills.react': 'React',
    'skills.tools': 'Tools',
    'skills.learning': 'Currently Learning',
    'skills.softSkills': 'Soft Skills',
    'skills.level.belajar': 'Learning',
    'skills.level.pemula': 'Beginner',
    'skills.level.baruBelajar': 'Just Started',
    'skills.level.familiar': 'Familiar',
    'skills.level.dalamProses': 'In Progress',
    'skills.level.terusBerkembang': 'Continuously Growing',
    'skills.disclaimer.title': 'Honest Disclaimer',
    'skills.disclaimer.desc1': 'I am still in the learning phase and not an expert in any field yet. What I have is a high enthusiasm for learning, good googling skills, and willingness to try new things.',
    'skills.disclaimer.desc2': 'I believe that every expert was once a beginner. With consistent daily learning, reading documentation, and working on small projects, I am confident that I will continue to grow. Learning never stops! 🚀',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Projects I am currently working on and planning to work on',
    'portfolio.developmentTitle': 'Portfolio Under Development',
    'portfolio.developmentDesc': 'As a beginner developer, my portfolio is still under development. I continuously work on new projects to sharpen my skills and gain experience. Every project is a valuable learning opportunity for me.',
    'portfolio.completed': 'Projects Completed',
    'portfolio.inProgress': 'Projects In Progress',
    'portfolio.planned': 'Projects Planned',
    
    // Contact Section
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Let\'s collaborate or just chat about web development!',
    'contact.connectTitle': 'Let\'s Connect',
    'contact.connectDesc': 'I am always open to discussions about technology, project collaborations, or even just exchanging experiences with fellow developers. Don\'t hesitate to contact me!',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.location': 'Location',
    'contact.bestTime': 'Best Time to Contact',
    'contact.schedule': 'Monday - Friday: 09:00 - 17:00 WIB\nSaturday: 10:00 - 15:00 WIB\nResponse time: Maximum 24 hours',
    'contact.sendMessage': 'Send Message',
    'contact.name': 'Full Name',
    'contact.namePlaceholder': 'Enter your full name',
    'contact.emailPlaceholder': 'name@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Write your message here...',
    'contact.send': 'Send Message',
    'contact.footer': 'Beginner Web Developer | Batam, Indonesia',
    'contact.copyright': '© 2024 Alfin Anandhika. Made with ❤️ using React & Tailwind CSS'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
