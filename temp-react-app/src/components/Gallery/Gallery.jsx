import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { galleryImages } from '../../data/content';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-number">05</span>
            <h2 className="section-title">Gallery</h2>
            <div className="section-line"></div>
          </motion.div>

          <motion.p className="gallery-intro" variants={itemVariants}>
            Moments captured along the journey — from laboratory work to competition 
            stages, each image tells a story of curiosity and persistence.
          </motion.p>

          <motion.div 
            className="gallery-grid"
            variants={containerVariants}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                variants={itemVariants}
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.02 }}
                layoutId={`gallery-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
              />
              <div className="lightbox-caption">
                <span className="caption-line"></span>
                <span className="caption-text">{selectedImage.alt}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
