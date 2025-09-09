import React, { useEffect, useState } from "react";

function HomePage({ onGetStarted }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "AI-powered translations in milliseconds with real-time processing",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: "🌐",
      title: "100+ Languages",
      description: "Support for major world languages including regional dialects",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: "🧠",
      title: "Smart Context",
      description: "Advanced AI understands context, tone, and cultural nuances",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const useCases = [
    {
      icon: "💼",
      title: "Business & Commerce",
      description: "Translate documents, emails, and business communications for global markets",
      examples: ["International contracts", "Marketing materials", "Customer support"],
      color: "#3B82F6"
    },
    {
      icon: "🎓",
      title: "Education & Learning",
      description: "Break language barriers in academic and research environments",
      examples: ["Research papers", "Study materials", "Academic collaboration"],
      color: "#10B981"
    },
    {
      icon: "✈️",
      title: "Travel & Tourism",
      description: "Navigate foreign countries with confidence and ease",
      examples: ["Booking confirmations", "Local directions", "Cultural interactions"],
      color: "#F59E0B"
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description: "Ensure clear communication in critical medical situations",
      examples: ["Medical reports", "Patient instructions", "Emergency communication"],
      color: "#EF4444"
    }
  ];

  const technologies = [
    {
      name: "Neural Machine Translation",
      description: "State-of-the-art deep learning models for accurate translations",
      icon: "🧠",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Natural Language Processing",
      description: "Advanced NLP algorithms that understand context and semantics",
      icon: "📝",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "Real-time Processing",
      description: "Optimized algorithms for instant translation results",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      name: "Multi-modal Support",
      description: "Handle text, voice, and image-based translation needs",
      icon: "🔄",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const benefits = [
    {
      title: "Cost Effective",
      description: "Eliminate expensive human translation services",
      icon: "💰",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Always Available",
      description: "24/7 access to translation services worldwide",
      icon: "🌍",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Consistent Quality",
      description: "Maintain uniform translation standards across all content",
      icon: "✨",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Privacy Focused",
      description: "Enterprise-grade security and data protection",
      icon: "🔒",
      gradient: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <div className="homepage">
      {/* Enhanced animated background */}
      <div className="background-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
          <div className="shape shape-7"></div>
        </div>
        <div className="gradient-overlay"></div>
        <div className="particle-field"></div>
      </div>

      {/* Navigation Bar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-glow">
              <span className="logo-icon">🌍</span>
            </div>
            <span className="logo-text">LEXI AI</span>
          </div>
          
          <div className="nav-links">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('features')}
            >
              Features
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('use-cases')}
            >
              Use Cases
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('technology')}
            >
              Technology
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('benefits')}
            >
              Benefits
            </button>
          </div>

          <div className="nav-actions">
            <button className="nav-cta-button" onClick={onGetStarted}>
              <span className="button-glow"></span>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="homepage-content">
        {/* Enhanced Hero section */}
        <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-background">
            <div className="hero-circle hero-circle-1"></div>
            <div className="hero-circle hero-circle-2"></div>
            <div className="hero-circle hero-circle-3"></div>
          </div>
          
          <div className="hero-title">
            <div className="title-container">
                             <h1 className="main-title">
                 <span className="title-line title-glow">LEXI AI</span>
               </h1>
              <div className="title-subtitle">
                <span className="subtitle-text">The Future of</span>
                <span className="subtitle-text highlight">Language Translation</span>
              </div>
            </div>
          </div>
          
          <p className="hero-description">
            Break down language barriers with cutting-edge AI technology. 
            Experience seamless, accurate, and context-aware translations 
            that bridge cultures and connect worlds. Powered by advanced neural networks 
            and natural language processing.
          </p>

          <div className="hero-actions">
            <button className="cta-button primary-glow" onClick={onGetStarted}>
              <span className="button-text">Get Started</span>
              <span className="button-arrow">→</span>
              <div className="button-particles"></div>
            </button>
            <button className="hero-secondary-button">
              <span className="button-icon">🎥</span>
              Watch Demo
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-pill">
              <span className="stat-number">100+</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat-pill">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-pill">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Available</span>
            </div>
          </div>
        </div>

        {/* Enhanced Features section */}
        <div id="features" className={`features-section ${isVisible ? 'slide-up' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Why Choose LEXI AI?</h2>
            <p className="section-subtitle">Experience the power of next-generation AI translation</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card ${currentFeature === index ? 'active' : ''}`}
                style={{
                  '--card-gradient': feature.gradient
                }}
              >
                <div className="feature-glow"></div>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-decoration"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced How it works section */}
        <div id="how-it-works" className={`how-it-works-section ${isVisible ? 'fade-in-delayed' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple steps to break language barriers</p>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-connection"></div>
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Input Your Text</h3>
                <p>Simply type or paste the text you want to translate in any supported language</p>
              </div>
            </div>
            <div className="step">
              <div className="step-connection"></div>
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Select Languages</h3>
                <p>Choose your source and target languages from our extensive language database</p>
              </div>
            </div>
            <div className="step">
              <div className="step-connection"></div>
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>AI Processing</h3>
                <p>Our advanced AI analyzes context and delivers accurate translations instantly</p>
              </div>
            </div>
            <div className="step">
              <div className="step-connection"></div>
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Get Results</h3>
                <p>Receive professional-quality translations with cultural context awareness</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Use cases section */}
        <div id="use-cases" className={`use-cases-section ${isVisible ? 'slide-up-delayed' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Perfect For Every Need</h2>
            <p className="section-subtitle">Discover how LEXI AI transforms communication across industries</p>
          </div>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="use-case-card" style={{'--accent-color': useCase.color}}>
                <div className="use-case-header">
                  <div className="use-case-icon">{useCase.icon}</div>
                  <div className="use-case-accent"></div>
                </div>
                <h3 className="use-case-title">{useCase.title}</h3>
                <p className="use-case-description">{useCase.description}</p>
                <ul className="use-case-examples">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Technology section */}
        <div id="technology" className={`technology-section ${isVisible ? 'fade-in-delayed-2' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Powered by Advanced Technology</h2>
            <p className="section-subtitle">Cutting-edge AI that understands and adapts</p>
          </div>
          <div className="technology-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="technology-card" style={{'--card-gradient': tech.gradient}}>
                <div className="tech-glow"></div>
                <div className="tech-icon">{tech.icon}</div>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
                <div className="tech-decoration"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Benefits section */}
        <div id="benefits" className={`benefits-section ${isVisible ? 'slide-up-delayed-2' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Key Benefits</h2>
            <p className="section-subtitle">Why millions choose LEXI AI</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" style={{'--card-gradient': benefit.gradient}}>
                <div className="benefit-glow"></div>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                <div className="benefit-decoration"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats section */}
        <div className={`stats-section ${isVisible ? 'fade-in-delayed-3' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Trusted Worldwide</h2>
            <p className="section-subtitle">Join millions of satisfied users</p>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-circle">
                <div className="stat-number">100+</div>
              </div>
              <div className="stat-label">Languages Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <div className="stat-number">99.9%</div>
              </div>
              <div className="stat-label">Translation Accuracy</div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <div className="stat-number">24/7</div>
              </div>
              <div className="stat-label">Global Availability</div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <div className="stat-number">1M+</div>
              </div>
              <div className="stat-label">Users Worldwide</div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to action */}
        <div className={`final-cta ${isVisible ? 'bounce-in' : ''}`}>
          <div className="cta-background">
            <div className="cta-circle cta-circle-1"></div>
            <div className="cta-circle cta-circle-2"></div>
          </div>
          <h2>Ready to Break Language Barriers?</h2>
          <p>Join millions of users worldwide who trust LEXI AI for their translation needs</p>
          <div className="cta-buttons">
            <button className="primary-cta-button primary-glow" onClick={onGetStarted}>
              <span className="button-text">Start Translating Now</span>
              <div className="button-particles"></div>
            </button>
            <button className="secondary-cta-button">
              <span className="button-icon">📚</span>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="homepage-footer">
        <div className="footer-background">
          <div className="footer-pattern"></div>
        </div>
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <span className="footer-logo">🌍 LEXI AI</span>
              <div className="footer-logo-glow"></div>
            </div>
            <p>Connecting the world through language with cutting-edge AI technology</p>
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#" className="footer-link">Features</a>
              <a href="#" className="footer-link">Pricing</a>
              <a href="#" className="footer-link">API</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="#" className="footer-link">Help Center</a>
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">Status</a>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Careers</a>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
              <a href="#" className="footer-link">Security</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LEXI AI. Powered by advanced AI technology and neural networks.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
