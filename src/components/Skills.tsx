
import { Code2, Database, Globe, Palette, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="text-blue-600" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
      level: "Beginner to Intermediate"
    },
    {
      title: "Backend Development",
      icon: <Database className="text-green-600" size={24} />,
      skills: ["Node.js", "Express.js", "API Development", "Database Basics"],
      level: "Beginner"
    },
    {
      title: "Tools & Technologies",
      icon: <Code2 className="text-purple-600" size={24} />,
      skills: ["Git", "VS Code", "Chrome DevTools", "NPM", "Vite"],
      level: "Beginner to Intermediate"
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="text-pink-600" size={24} />,
      skills: ["Figma", "Color Theory", "Typography", "User Experience Basics"],
      level: "Beginner"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-orange-600" size={24} />,
      skills: ["React Native (Learning)", "Progressive Web Apps"],
      level: "Learning"
    },
    {
      title: "Soft Skills",
      icon: <Zap className="text-yellow-600" size={24} />,
      skills: ["Problem Solving", "Team Work", "Communication", "Continuous Learning"],
      level: "Developing"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Kemampuan</h2>
            <p className="text-lg text-gray-600">Teknologi dan tools yang sedang saya pelajari dan kembangkan</p>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Komitmen Belajar</h3>
              <p className="text-gray-700 leading-relaxed">
                Sebagai developer pemula, saya berkomitmen untuk terus belajar dan mengembangkan kemampuan saya. 
                Setiap hari saya dedikasikan waktu untuk mempelajari teknologi baru, mengerjakan project praktis, 
                dan mengikuti best practices dalam development. Saya percaya bahwa dengan konsistensi dan dedikasi, 
                saya akan terus berkembang menjadi developer yang lebih baik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
