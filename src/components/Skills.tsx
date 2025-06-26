
import { Code2, Database, Globe, Palette, Smartphone, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.htmlCss'),
      icon: <Globe className="text-primary" size={24} />,
      skills: language === 'id' ? 
        ["HTML5 Dasar", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"] :
        ["Basic HTML5", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"],
      level: t('skills.level.belajar')
    },
    {
      title: t('skills.javascript'),
      icon: <Code2 className="text-primary" size={24} />,
      skills: language === 'id' ?
        ["JavaScript Dasar", "DOM Manipulation", "Event Handling", "ES6 Basics"] :
        ["Basic JavaScript", "DOM Manipulation", "Event Handling", "ES6 Basics"],
      level: t('skills.level.pemula')
    },
    {
      title: t('skills.react'),
      icon: <Database className="text-primary" size={24} />,
      skills: language === 'id' ?
        ["Komponen Dasar", "Props & State", "React Hooks", "Event Handling"] :
        ["Basic Components", "Props & State", "React Hooks", "Event Handling"],
      level: t('skills.level.baruBelajar')
    },
    {
      title: t('skills.tools'),
      icon: <Palette className="text-primary" size={24} />,
      skills: language === 'id' ?
        ["VS Code", "Git (Dasar)", "Browser DevTools", "Tailwind CSS"] :
        ["VS Code", "Git (Basic)", "Browser DevTools", "Tailwind CSS"],
      level: t('skills.level.familiar')
    },
    {
      title: t('skills.learning'),
      icon: <BookOpen className="text-primary" size={24} />,
      skills: ["Node.js", "Express.js", "Database", "API"],
      level: t('skills.level.dalamProses')
    },
    {
      title: t('skills.softSkills'),
      icon: <Smartphone className="text-primary" size={24} />,
      skills: language === 'id' ?
        ["Semangat Belajar", "Problem Solving", "Google-fu", "YouTube University"] :
        ["Learning Enthusiasm", "Problem Solving", "Google-fu", "YouTube University"],
      level: t('skills.level.terusBerkembang')
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('skills.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('skills.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover-effect">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                    {category.level}
                  </span>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto hover-effect">
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t('skills.disclaimer.title')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('skills.disclaimer.desc1')}
              </p>
              <p className="text-muted-foreground">
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
