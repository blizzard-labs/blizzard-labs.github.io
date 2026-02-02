import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../data/content';
import './Research.css';

const Research = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'IN PROGRESS': return 'status-progress';
      case 'PUBLISHED': return 'status-published';
      case 'PREPRINT': return 'status-preprint';
      case 'STARTUP': return 'status-startup';
      case 'COMPLETED': return 'status-completed';
      case 'TO BE PATENTED': return 'status-patent';
      default: return '';
    }
  };

  return (
    <section id="research" className="research section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-number">02</span>
            <h2 className="section-title">Research & Projects</h2>
            <div className="section-line"></div>
          </motion.div>

          <motion.p className="research-intro" variants={itemVariants}>
            A collection of investigations at the intersection of neuroscience, 
            computation, and engineering — each driven by curiosity and the desire 
            to create meaningful impact.
          </motion.p>

          <div className="projects-timeline">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card"
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="project-year">
                  <span className="year-bracket">[</span>
                  {project.year}
                  <span className="year-bracket">]</span>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-status ${getStatusClass(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="project-subtitle">{project.subtitle}</p>
                  
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="project-tag more">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="project-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>

              <div className="modal-header">
                <span className="modal-year">{selectedProject.year}</span>
                <span className={`modal-status ${getStatusClass(selectedProject.status)}`}>
                  {selectedProject.status}
                </span>
              </div>

              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-subtitle">{selectedProject.subtitle}</p>

              <div className="modal-divider"></div>

              <div className="modal-description">
                <p>{selectedProject.description}</p>
                
                {selectedProject.motivation && (
                  <div className="modal-motivation">
                    <h4>Motivation</h4>
                    <ul>
                      {selectedProject.motivation.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="modal-tags">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="modal-tag">{tag}</span>
                ))}
              </div>

              <div className="modal-resources">
                <h4>Resources</h4>
                <div className="resources-list">
                  {selectedProject.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <span className="resource-label">{resource.label}</span>
                      {resource.note && (
                        <span className="resource-note">{resource.note}</span>
                      )}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Research;
