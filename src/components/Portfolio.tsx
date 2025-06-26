
import { ExternalLink, Github, Code, Lightbulb, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: language === 'id' ?
        "Website portfolio pribadi yang dibuat menggunakan React, TypeScript, dan Tailwind CSS. Menampilkan profil, skills, dan informasi kontak dengan desain yang responsive dan modern." :
        "Personal portfolio website built using React, TypeScript, and Tailwind CSS. Showcasing profile, skills, and contact information with responsive and modern design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      type: language === 'id' ? "Personal Project" : "Personal Project"
    },
    {
      title: "Todo List Application",
      description: language === 'id' ?
        "Aplikasi todo list sederhana untuk belajar konsep CRUD operations dan state management. Fitur menambah, mengedit, menghapus, dan menandai task sebagai selesai." :
        "Simple todo list application for learning CRUD operations and state management concepts. Features include adding, editing, deleting, and marking tasks as completed.",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      status: "In Progress",
      type: language === 'id' ? "Learning Project" : "Learning Project"
    },
    {
      title: "Landing Page Restaurant",
      description: language === 'id' ?
        "Landing page untuk restaurant dengan design yang menarik dan responsive. Fokus pada UI/UX design dan implementasi layout yang baik." :
        "Restaurant landing page with attractive and responsive design. Focus on UI/UX design and good layout implementation.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      status: "Planned",
      type: language === 'id' ? "Practice Project" : "Practice Project"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500 text-white';
      case 'In Progress':
        return 'bg-yellow-500 text-black';
      case 'Planned':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('portfolio.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('portfolio.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg hover-effect">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-muted-foreground">{project.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-primary hover-effect">
                    <Github size={16} />
                    <span className="text-sm">GitHub</span>
                  </button>
                  <button className="flex items-center gap-2 text-primary hover-effect">
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg text-center max-w-3xl mx-auto hover-effect">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t('portfolio.developmentTitle')}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('portfolio.developmentDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center gap-2">
                <Target size={20} className="text-green-500" />
                <span>1 {t('portfolio.completed')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={20} className="text-yellow-500" />
                <span>1 {t('portfolio.inProgress')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb size={20} className="text-blue-500" />
                <span>1 {t('portfolio.planned')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
