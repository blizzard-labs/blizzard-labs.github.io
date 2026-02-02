import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { readings, personalInfo } from '../../data/content';
import './Contact.css';

const Contact = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Readings Section */}
          <motion.div className="readings-section" variants={itemVariants}>
            <div className="readings-header">
              <span className="readings-ornament">❧</span>
              <h3 className="readings-title">Current Reading List</h3>
              <span className="readings-ornament">❧</span>
            </div>
            <div className="readings-list">
              {readings.map((book, index) => (
                <motion.a
                  key={index}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reading-item"
                  whileHover={{ x: 10 }}
                >
                  <span className="reading-number">{index + 1}.</span>
                  <div className="reading-content">
                    <span className="reading-title">{book.title}</span>
                    <span className="reading-author">by {book.author}</span>
                    {book.type && <span className="reading-type">{book.type}</span>}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="reading-arrow">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="contact-content" variants={itemVariants}>
            <div className="contact-header">
              <div className="section-header">
                <span className="section-number">06</span>
                <h2 className="section-title">Get in Touch</h2>
                <div className="section-line"></div>
              </div>
            </div>

            <div className="contact-grid">
              <div className="contact-text">
                <p className="contact-description">
                  I'm always interested in discussing new research opportunities, 
                  collaborative projects, or ideas at the intersection of neuroscience 
                  and computation. Don't hesitate to reach out.
                </p>
                
                <div className="contact-links">
                  <a 
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="link-label">GitHub</span>
                    <span className="link-value">blizzard-labs</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="mailto:contact@krishnabhatt.com"
                    className="contact-link"
                  >
                    <span className="link-label">Email</span>
                    <span className="link-value">Contact for inquiries</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="contact-quote">
                <blockquote>
                  <p>"The important thing is not to stop questioning. Curiosity has its own reason for existing."</p>
                  <cite>— Albert Einstein</cite>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
