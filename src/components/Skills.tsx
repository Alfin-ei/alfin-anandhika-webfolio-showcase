
import { Code2, Database, Globe, Palette, Smartphone, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.htmlCss'),
      icon: <Globe className="text-cyan-500" size={24} />,
      skills: language === 'id' ? 
        ["HTML5 Dasar", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"] :
        ["Basic HTML5", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"],
      level: t('skills.level.belajar'),
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: t('skills.javascript'),
      icon: <Code2 className="text-yellow-500" size={24} />,
      skills: language === 'id' ?
        ["JavaScript Dasar", "DOM Manipulation", "Event Handling", "ES6 Basics"] :
        ["Basic JavaScript", "DOM Manipulation", "Event Handling", "ES6 Basics"],
      level: t('skills.level.pemula'),
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: t('skills.react'),
      icon: <Database className="text-blue-500" size={24} />,
      skills: language === 'id' ?
        ["Komponen Dasar", "Props & State", "React Hooks", "Event Handling"] :
        ["Basic Components", "Props & State", "React Hooks", "Event Handling"],
      level: t('skills.level.baruBelajar'),
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: t('skills.tools'),
      icon: <Palette className="text-green-500" size={24} />,
      skills: language === 'id' ?
        ["VS Code", "Git (Dasar)", "Browser DevTools", "Tailwind CSS"] :
        ["VS Code", "Git (Basic)", "Browser DevTools", "Tailwind CSS"],
      level: t('skills.level.familiar'),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: t('skills.learning'),
      icon: <BookOpen className="text-purple-500" size={24} />,
      skills: ["Node.js", "Express.js", "Database", "API"],
      level: t('skills.level.dalamProses'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: t('skills.softSkills'),
      icon: <Smartphone className="text-pink-500" size={24} />,
      skills: language === 'id' ?
        ["Semangat Belajar", "Problem Solving", "Google-fu", "YouTube University"] :
        ["Learning Enthusiasm", "Problem Solving", "Google-fu", "YouTube University"],
      level: t('skills.level.terusBerkembang'),
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('skills.title')}</h2>
            <p className="text-xl text-muted-foreground font-medium">{t('skills.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`glass-card p-6 professional-hover animate-on-scroll`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="mb-6">
                  <span className={`inline-block glass-card text-foreground text-sm px-4 py-2 rounded-full font-medium bg-gradient-to-r ${category.gradient} text-white`}>
                    {category.level}
                  </span>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-foreground flex items-center gap-3 font-medium">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-on-scroll">
            <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto professional-hover">
              <h3 className="text-2xl font-bold mb-4 gradient-text">{t('skills.disclaimer.title')}</h3>
              <p className="leading-relaxed mb-4 font-medium text-foreground">
                {t('skills.disclaimer.desc1')}
              </p>
              <p className="leading-relaxed font-medium text-foreground">
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
