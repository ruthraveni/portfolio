import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Online Voting System',
     date: 'June 2025',
    description: 'Developed a secure and transparent web-based online voting platform that enables users to cast votes digitally while ensuring data integrity and authentication.',
    features: [
      'Secure user authentication and authorization',
      'Role-based Admin and User dashboards',
      'Real-time vote counting and result monitoring',
      'Candidate management system',
      'Transparent and efficient voting process',
      'Responsive user interface'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/ruthraveni/OnlineVotingSystem',
   
  },
  {
    title: 'Smart Donation Platform',
     date: 'May 2026',
    description: 'Developed a full-stack donation management platform that connects donors with charitable organizations and individuals in need through a secure and user-friendly system.',
    features: [
      'User registration and secure authentication',
      'Campaign creation and management',
      'Donation tracking and progress monitoring',
      'User dashboard for managing donations',
      'Responsive and modern UI',
      'API integration and data management'
    ],
    tech: ['React.js', 'Spring Boot', 'MySQL', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/ruthraveni/Smart_Donation_Platform',
    
  },
  {
    title: 'Diabetes Prediction System',
    date: 'December 2025',
    description: 'Developed a machine learning-based Diabetes Prediction System using Python, Scikit-learn, and Random Forest for disease prediction.',
    features: [
      'Data preprocessing and feature engineering',
      'Machine learning model training',
      'Real-time prediction and analytics',
      'Interactive Gradio interface'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 'Gradio'],
   
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gradient"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 flex flex-col h-full relative"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-main)]">{project.title}</h3>
                  {project.date && <p className="text-sm text-[var(--primary-color)] font-medium mt-1">{project.date}</p>}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-xl text-[var(--text-sub)] hover:text-[var(--text-main)] transition-colors">
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-lg text-[var(--text-sub)] hover:text-[var(--primary-color)] transition-colors">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-[var(--text-sub)] mb-4">
                {project.description}
              </p>

              {project.features && (
                <ul className="list-disc list-inside text-[var(--text-sub)] text-sm mb-6 flex-grow space-y-1">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
              )}
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)]">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-medium text-[var(--primary-color)] bg-[rgba(37,99,235,0.1)] px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
