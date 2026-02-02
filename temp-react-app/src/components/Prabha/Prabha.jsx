import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { prabha } from '../../data/content';
import './Prabha.css';

const Prabha = () => {
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
    <section id="prabha" className="prabha section">
      <div className="prabha-background">
        <div className="prabha-pattern"></div>
      </div>
      
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-number">04</span>
            <h2 className="section-title">Prabha Initiative</h2>
            <div className="section-line"></div>
          </motion.div>

          <div className="prabha-content">
            <motion.div className="prabha-intro" variants={itemVariants}>
              <div className="prabha-badge">Non-Profit Initiative</div>
              <h3 className="prabha-name">{prabha.name}</h3>
              <p className="prabha-tagline">{prabha.tagline}</p>
              <p className="prabha-mission">"{prabha.mission}"</p>
            </motion.div>

            <motion.p className="prabha-description" variants={itemVariants}>
              {prabha.description}
            </motion.p>

            <motion.div className="prabha-values" variants={itemVariants}>
              <h4 className="values-title">Our Foundation</h4>
              <div className="values-grid">
                {prabha.values.map((value, index) => (
                  <motion.div 
                    key={index}
                    className="value-card"
                    whileHover={{ y: -5 }}
                  >
                    <span className="value-number">0{index + 1}</span>
                    <h5 className="value-title">{value.title}</h5>
                    <p className="value-description">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="prabha-benefits" variants={itemVariants}>
              <h4 className="benefits-title">Why Volunteer with Prabha?</h4>
              <div className="benefits-list">
                {prabha.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="benefit-item"
                    whileHover={{ x: 10 }}
                  >
                    <span className="benefit-marker">◆</span>
                    <div className="benefit-content">
                      <h5 className="benefit-title">{benefit.title}</h5>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="prabha-cta" variants={itemVariants}>
              <div className="cta-ornament">✦ ✦ ✦</div>
              <h4 className="cta-title">Join Our Pilot Program</h4>
              <p className="cta-description">
                We're onboarding a limited number of student physiotherapists for our 
                Summer 2025 pilot program. Be part of making compassionate care accessible to all.
              </p>
              <motion.a
                href={prabha.interestForm}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Complete Interest Form
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prabha;
