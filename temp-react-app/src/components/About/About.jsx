import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/content';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-image-wrapper" variants={itemVariants}>
            <div className="about-image-frame">
              <img 
                src={personalInfo.headshot} 
                alt={personalInfo.name}
                className="about-image"
              />
              <div className="image-corner top-left"></div>
              <div className="image-corner top-right"></div>
              <div className="image-corner bottom-left"></div>
              <div className="image-corner bottom-right"></div>
            </div>
            <div className="about-image-caption">
              <span className="caption-line"></span>
              <span className="caption-text">Fig. 1 — Portrait</span>
            </div>
          </motion.div>

          <div className="about-content">
            <motion.div className="section-header" variants={itemVariants}>
              <span className="section-number">01</span>
              <h2 className="section-title">About</h2>
              <div className="section-line"></div>
            </motion.div>

            <motion.p className="about-bio" variants={itemVariants}>
              {personalInfo.bio}
            </motion.p>

            <motion.div className="about-interests" variants={itemVariants}>
              <h3 className="interests-title">Fields of Inquiry</h3>
              <div className="interests-grid">
                {personalInfo.interests.map((interest, index) => (
                  <motion.div 
                    key={index}
                    className="interest-item"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="interest-field">{interest.field}</span>
                    <span className="interest-divider">—</span>
                    <span className="interest-focus">{interest.focus}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Research Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Awards Won</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">TEDx Talks</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
