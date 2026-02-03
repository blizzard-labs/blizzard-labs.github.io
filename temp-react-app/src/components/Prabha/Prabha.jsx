import { prabha } from '../../data/content';
import './Prabha.css';

const Prabha = () => {
  return (
    <section id="prabha" className="prabha section">
      <div className="prabha-background">
        <div className="prabha-pattern"></div>
      </div>
      
      <div className="container">
        <div>
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Prabha Initiative</h2>
            <div className="section-line"></div>
          </div>

          <div className="prabha-content">
            <div className="prabha-intro">
              <div className="prabha-badge">Non-Profit Initiative</div>
              <h3 className="prabha-name">{prabha.name}</h3>
              <p className="prabha-tagline">{prabha.tagline}</p>
              <p className="prabha-mission">"{prabha.mission}"</p>
            </div>

            <p className="prabha-description">
              {prabha.description}
            </p>

            <div className="prabha-values">
              <h4 className="values-title">Our Foundation</h4>
              <div className="values-grid">
                {prabha.values.map((value, index) => (
                  <div 
                    key={index}
                    className="value-card"
                  >
                    <span className="value-number">0{index + 1}</span>
                    <h5 className="value-title">{value.title}</h5>
                    <p className="value-description">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="prabha-benefits">
              <h4 className="benefits-title">Why Volunteer with Prabha?</h4>
              <div className="benefits-list">
                {prabha.benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="benefit-item"
                  >
                    <span className="benefit-marker">◆</span>
                    <div className="benefit-content">
                      <h5 className="benefit-title">{benefit.title}</h5>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prabha-cta">
              <div className="cta-ornament">✦ ✦ ✦</div>
              <h4 className="cta-title">Join Our Pilot Program</h4>
              <p className="cta-description">
                We're onboarding a limited number of student physiotherapists for our 
                Summer 2025 pilot program. Be part of making compassionate care accessible to all.
              </p>
              <a
                href={prabha.interestForm}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Complete Interest Form
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prabha;
