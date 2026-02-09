import './About.css'

function About() {
  const whyAttend = [
    {
      icon: '🎯',
      title: 'Cutting-Edge Research',
      description: 'Access the latest innovations in clean energy and sustainable technologies'
    },
    {
      icon: '🤝',
      title: 'Global Networking',
      description: 'Connect with industry leaders, researchers, and innovators worldwide'
    },
    {
      icon: '💡',
      title: 'Knowledge Exchange',
      description: 'Participate in workshops, panels, and interactive sessions'
    },
    {
      icon: '🌍',
      title: 'Sustainability Impact',
      description: 'Contribute to building a greener, more sustainable future'
    }
  ]

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About the Summit</h1>
          <p>Driving Innovation for a Sustainable Future</p>
        </div>
      </section>

      <section className="section about-vision">
        <div className="about-container">
          <div className="about-image-banner">
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80" 
              alt="Sustainable technology conference"
              className="about-banner-img"
            />
          </div>

          <div className="about-content">
            <h2 className="section-title">Our Vision</h2>
            <p>
              The <strong>Global Summit on Clean Energy and Sustainable Technologies</strong> is a premier 
              international platform dedicated to advancing clean energy solutions and sustainable innovations 
              that will shape our planet's future.
            </p>
            <p>
              We bring together leading scientists, engineers, policymakers, and industry innovators to share 
              groundbreaking research, discuss emerging technologies, and forge collaborations that drive the 
              global transition to sustainable energy systems.
            </p>
          </div>

          <div className="about-mission">
            <h2 className="section-title">Sustainability Mission</h2>
            <p>
              Our mission is to accelerate the adoption of clean energy technologies and sustainable practices 
              worldwide. Through knowledge sharing, innovation showcasing, and strategic partnerships, we aim 
              to contribute meaningfully to achieving global net-zero targets and building a resilient, 
              sustainable future for all.
            </p>
          </div>
        </div>
      </section>

      <section className="section why-attend-section">
        <div className="why-attend-container">
          <h2 className="section-title">Why Attend?</h2>
          <p className="section-subtitle">
            Join us for an unparalleled experience in clean energy and sustainability
          </p>
          
          <div className="why-attend-grid">
            {whyAttend.map((item, index) => (
              <div key={index} className="why-attend-card">
                <div className="why-attend-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
