
import { Code2, Database, Globe, Palette, Smartphone, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.htmlCss'),
      icon: <Globe className="text-cyan-400" size={24} />,
      skills: language === 'id' ? 
        ["HTML5 Dasar", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"] :
        ["Basic HTML5", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"],
      level: t('skills.level.belajar'),
      color: "bg-cyan-500/20 border-cyan-500"
    },
    {
      title: t('skills.javascript'),
      icon: <Code2 className="text-yellow-400" size={24} />,
      skills: language === 'id' ?
        ["JavaScript Dasar", "DOM Manipulation", "Event Handling", "ES6 Basics"] :
        ["Basic JavaScript", "DOM Manipulation", "Event Handling", "ES6 Basics"],
      level: t('skills.level.pemula'),
      color: "bg-yellow-500/20 border-yellow-500"
    },
    {
      title: t('skills.react'),
      icon: <Database className="text-red-400" size={24} />,
      skills: language === 'id' ?
        ["Komponen Dasar", "Props & State", "React Hooks", "Event Handling"] :
        ["Basic Components", "Props & State", "React Hooks", "Event Handling"],
      level: t('skills.level.baruBelajar'),
      color: "bg-red-500/20 border-red-500"
    },
    {
      title: t('skills.tools'),
      icon: <Palette className="text-green-400" size={24} />,
      skills: language === 'id' ?
        ["VS Code", "Git (Dasar)", "Browser DevTools", "Tailwind CSS"] :
        ["VS Code", "Git (Basic)", "Browser DevTools", "Tailwind CSS"],
      level: t('skills.level.familiar'),
      color: "bg-green-500/20 border-green-500"
    },
    {
      title: t('skills.learning'),
      icon: <BookOpen className="text-purple-400" size={24} />,
      skills: ["Node.js", "Express.js", "Database", "API"],
      level: t('skills.level.dalamProses'),
      color: "bg-purple-500/20 border-purple-500"
    },
    {
      title: t('skills.softSkills'),
      icon: <Smartphone className="text-pink-400" size={24} />,
      skills: language === 'id' ?
        ["Semangat Belajar", "Problem Solving", "Google-fu", "YouTube University"] :
        ["Learning Enthusiasm", "Problem Solving", "Google-fu", "YouTube University"],
      level: t('skills.level.terusBerkembang'),
      color: "bg-pink-500/20 border-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl font-bold manga-neon-text mb-4">{t('skills.title')}</h2>
            <p className="text-xl text-white/80 font-medium">{t('skills.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`manga-card p-6 rounded-lg manga-interactive scroll-animate bg-black/40 backdrop-blur-sm border-2 ${category.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="mb-6">
                  <span className="inline-block speech-bubble text-black text-sm px-4 py-2 rounded-full font-bold">
                    {category.level}
                  </span>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-white/90 flex items-center gap-3 font-medium">
                      <div className="w-2 h-2 rounded-full manga-gradient"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center scroll-animate">
            <div className="speech-bubble p-8 rounded-lg max-w-2xl mx-auto manga-interactive">
              <h3 className="text-2xl font-bold mb-4">{t('skills.disclaimer.title')}</h3>
              <p className="leading-relaxed mb-4 font-medium">
                {t('skills.disclaimer.desc1')}
              </p>
              <p className="leading-relaxed font-medium">
                {t('skills.disclaimer.desc2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
