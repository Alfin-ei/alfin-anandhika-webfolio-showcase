
import { Code2, Database, Globe, Palette, Smartphone, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.htmlCss'),
      icon: <Globe className="neon-blue" size={24} />,
      skills: language === 'id' ? 
        ["HTML5 Dasar", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"] :
        ["Basic HTML5", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"],
      level: t('skills.level.belajar')
    },
    {
      title: t('skills.javascript'),
      icon: <Code2 className="neon-cyan" size={24} />,
      skills: language === 'id' ?
        ["JavaScript Dasar", "DOM Manipulation", "Event Handling", "ES6 Basics"] :
        ["Basic JavaScript", "DOM Manipulation", "Event Handling", "ES6 Basics"],
      level: t('skills.level.pemula')
    },
    {
      title: t('skills.react'),
      icon: <Database className="neon-pink" size={24} />,
      skills: language === 'id' ?
        ["Komponen Dasar", "Props & State", "React Hooks", "Event Handling"] :
        ["Basic Components", "Props & State", "React Hooks", "Event Handling"],
      level: t('skills.level.baruBelajar')
    },
    {
      title: t('skills.tools'),
      icon: <Palette className="text-green-400" size={24} />,
      skills: language === 'id' ?
        ["VS Code", "Git (Dasar)", "Browser DevTools", "Tailwind CSS"] :
        ["VS Code", "Git (Basic)", "Browser DevTools", "Tailwind CSS"],
      level: t('skills.level.familiar')
    },
    {
      title: t('skills.learning'),
      icon: <BookOpen className="neon-blue" size={24} />,
      skills: ["Node.js", "Express.js", "Database", "API"],
      level: t('skills.level.dalamProses')
    },
    {
      title: t('skills.softSkills'),
      icon: <Smartphone className="neon-pink" size={24} />,
      skills: language === 'id' ?
        ["Semangat Belajar", "Problem Solving", "Google-fu", "YouTube University"] :
        ["Learning Enthusiasm", "Problem Solving", "Google-fu", "YouTube University"],
      level: t('skills.level.terusBerkembang')
    }
  ];

  return (
    <section id="skills" className="py-20 deep-space-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold deep-space-text mb-4">{t('skills.title')}</h2>
            <p className="text-lg text-gray-400">{t('skills.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="deep-space-bg p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:neon-glow-cyan">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold deep-space-text">{category.title}</h3>
                </div>
                <div className="mb-4">
                  <span className="inline-block neon-gradient-alt text-white text-sm px-3 py-1 rounded-full">
                    {category.level}
                  </span>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full neon-gradient"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="deep-space-bg p-8 rounded-lg border border-gray-700 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold deep-space-text mb-4">{t('skills.disclaimer.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('skills.disclaimer.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed">
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
