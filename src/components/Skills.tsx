
import { Code2, Database, Globe, Palette, Smartphone, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.htmlCss'),
      icon: <Globe className="text-blue-300" size={24} />,
      skills: language === 'id' ? 
        ["HTML5 Dasar", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"] :
        ["Basic HTML5", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"],
      level: t('skills.level.belajar')
    },
    {
      title: t('skills.javascript'),
      icon: <Code2 className="text-cyan-300" size={24} />,
      skills: language === 'id' ?
        ["JavaScript Dasar", "DOM Manipulation", "Event Handling", "ES6 Basics"] :
        ["Basic JavaScript", "DOM Manipulation", "Event Handling", "ES6 Basics"],
      level: t('skills.level.pemula')
    },
    {
      title: t('skills.react'),
      icon: <Database className="text-purple-300" size={24} />,
      skills: language === 'id' ?
        ["Komponen Dasar", "Props & State", "React Hooks", "Event Handling"] :
        ["Basic Components", "Props & State", "React Hooks", "Event Handling"],
      level: t('skills.level.baruBelajar')
    },
    {
      title: t('skills.tools'),
      icon: <Palette className="text-green-300" size={24} />,
      skills: language === 'id' ?
        ["VS Code", "Git (Dasar)", "Browser DevTools", "Tailwind CSS"] :
        ["VS Code", "Git (Basic)", "Browser DevTools", "Tailwind CSS"],
      level: t('skills.level.familiar')
    },
    {
      title: t('skills.learning'),
      icon: <BookOpen className="text-blue-300" size={24} />,
      skills: ["Node.js", "Express.js", "Database", "API"],
      level: t('skills.level.dalamProses')
    },
    {
      title: t('skills.softSkills'),
      icon: <Smartphone className="text-pink-300" size={24} />,
      skills: language === 'id' ?
        ["Semangat Belajar", "Problem Solving", "Google-fu", "YouTube University"] :
        ["Learning Enthusiasm", "Problem Solving", "Google-fu", "YouTube University"],
      level: t('skills.level.terusBerkembang')
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold glass-text mb-4">{t('skills.title')}</h2>
            <p className="text-lg text-white/70">{t('skills.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card p-6 rounded-lg interactive scroll-animate">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="mb-4">
                  <span className="inline-block glassmorphism-gradient text-white text-sm px-3 py-1 rounded-full border border-white/20">
                    {category.level}
                  </span>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-white/80 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full neon-gradient"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center scroll-animate">
            <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto interactive">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('skills.disclaimer.title')}</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                {t('skills.disclaimer.desc1')}
              </p>
              <p className="text-white/80 leading-relaxed">
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
