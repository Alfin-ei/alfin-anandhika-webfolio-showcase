
import { Code2, Database, Globe, Palette, Smartphone, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "HTML & CSS",
      icon: <Globe className="text-blue-600" size={24} />,
      skills: ["HTML5 Dasar", "CSS3", "Flexbox", "Grid Layout", "Responsive Design"],
      level: "Belajar"
    },
    {
      title: "JavaScript",
      icon: <Code2 className="text-yellow-600" size={24} />,
      skills: ["JavaScript Dasar", "DOM Manipulation", "Event Handling", "ES6 Basics"],
      level: "Pemula"
    },
    {
      title: "React",
      icon: <Database className="text-cyan-600" size={24} />,
      skills: ["Komponen Dasar", "Props & State", "React Hooks", "Event Handling"],
      level: "Baru Belajar"
    },
    {
      title: "Tools",
      icon: <Palette className="text-green-600" size={24} />,
      skills: ["VS Code", "Git (Dasar)", "Browser DevTools", "Tailwind CSS"],
      level: "Familiar"
    },
    {
      title: "Sedang Dipelajari",
      icon: <BookOpen className="text-purple-600" size={24} />,
      skills: ["Node.js", "Express.js", "Database", "API"],
      level: "Dalam Proses"
    },
    {
      title: "Soft Skills",
      icon: <Smartphone className="text-orange-600" size={24} />,
      skills: ["Semangat Belajar", "Problem Solving", "Google-fu", "YouTube University"],
      level: "Terus Berkembang"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Kemampuan</h2>
            <p className="text-lg text-gray-600">Hal-hal yang sedang saya pelajari dan kembangkan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {category.level}
                  </span>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Honest Disclaimer</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Saya masih dalam tahap belajar dan belum expert di bidang apapun. Yang saya miliki adalah 
                <strong> semangat tinggi untuk belajar</strong>, kemampuan googling yang baik, dan kemauan 
                untuk mencoba hal-hal baru.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Saya percaya bahwa setiap expert pernah menjadi pemula. Dengan konsistensi belajar setiap hari, 
                membaca dokumentasi, dan mengerjakan project kecil-kecil, saya yakin akan terus berkembang. 
                <em> Learning never stops!</em> 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
