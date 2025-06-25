
import { ExternalLink, Github, Code, Lightbulb, Target } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Website portfolio pribadi yang dibuat menggunakan React, TypeScript, dan Tailwind CSS. Menampilkan profil, skills, dan informasi kontak dengan desain yang responsive dan modern.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      type: "Personal Project"
    },
    {
      title: "Todo List Application",
      description: "Aplikasi todo list sederhana untuk belajar konsep CRUD operations dan state management. Fitur menambah, mengedit, menghapus, dan menandai task sebagai selesai.",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      status: "In Progress",
      type: "Learning Project"
    },
    {
      title: "Landing Page Restaurant",
      description: "Landing page untuk restaurant dengan design yang menarik dan responsive. Fokus pada UI/UX design dan implementasi layout yang baik.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      status: "Planned",
      type: "Practice Project"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planned':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Target className="text-green-600" size={16} />;
      case 'In Progress':
        return <Code className="text-yellow-600" size={16} />;
      case 'Planned':
        return <Lightbulb className="text-blue-600" size={16} />;
      default:
        return <Code className="text-gray-600" size={16} />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-lg text-gray-600">Project-project yang sedang dan akan saya kerjakan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(project.status)}
                    <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{project.type}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <Github size={16} />
                    <span className="text-sm">GitHub</span>
                  </button>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Portfolio Dalam Pengembangan</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Sebagai developer pemula, portfolio saya masih dalam tahap pengembangan. Saya terus mengerjakan 
              project-project baru untuk mengasah skill dan menambah pengalaman. Setiap project adalah 
              kesempatan belajar yang berharga bagi saya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-600">
                <Target size={20} className="text-green-600" />
                <span>1 Project Completed</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Code size={20} className="text-yellow-600" />
                <span>1 Project In Progress</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Lightbulb size={20} className="text-blue-600" />
                <span>1 Project Planned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
