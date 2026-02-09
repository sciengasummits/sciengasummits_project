import { Link } from 'react-router-dom'
import { useState } from 'react'
import CountdownTimer from '../components/CountdownTimer'
import SpeakerCard from '../components/SpeakerCard'
import './Home.css'

function Home() {
  const impactMetrics = [
    { number: '50+', label: 'Countries' },
    { number: '200+', label: 'Speakers' },
    { number: '500+', label: 'Attendees' },
    { number: '100+', label: 'Sessions' }
  ]

  const focusAreas = [
    {
      icon: '⚡',
      title: 'Clean Energy Systems',
      description: 'Renewable power generation and distribution'
    },
    {
      icon: '💧',
      title: 'Green Hydrogen',
      description: 'Future of sustainable fuel technology'
    },
    {
      icon: '🌍',
      title: 'Net Zero Technologies',
      description: 'Carbon neutrality and climate solutions'
    },
    {
      icon: '🏗️',
      title: 'Sustainable Engineering',
      description: 'Eco-friendly infrastructure and design'
    }
  ]

  const tracks = [
    {
      icon: '⚡',
      title: 'Clean Energy Systems',
      topics: [
        'Renewable Energy Integration',
        'Smart Grid Technologies',
        'Energy Storage Solutions',
        'Distributed Generation Systems',
        'Microgrids and Energy Management'
      ]
    },
    {
      icon: '💧',
      title: 'Green Hydrogen',
      topics: [
        'Hydrogen Production Technologies',
        'Fuel Cell Applications',
        'Hydrogen Storage and Transport',
        'Industrial Hydrogen Use Cases',
        'Policy and Economics of Hydrogen'
      ]
    },
    {
      icon: '🌍',
      title: 'Net Zero Technologies',
      topics: [
        'Carbon Capture and Storage',
        'Climate Change Mitigation',
        'Circular Economy Solutions',
        'Sustainable Materials',
        'Life Cycle Assessment'
      ]
    },
    {
      icon: '🏗️',
      title: 'Sustainable Engineering',
      topics: [
        'Green Building Design',
        'Sustainable Manufacturing',
        'Eco-friendly Materials',
        'Energy-Efficient Systems',
        'Environmental Impact Assessment'
      ]
    },
    {
      icon: '🏙️',
      title: 'Smart Cities & Infrastructure',
      topics: [
        'Urban Sustainability Planning',
        'Intelligent Transportation Systems',
        'IoT for Smart Cities',
        'Sustainable Water Management',
        'Green Infrastructure Development'
      ]
    },
    {
      icon: '🔋',
      title: 'Energy Storage & Batteries',
      topics: [
        'Advanced Battery Technologies',
        'Grid-Scale Energy Storage',
        'Electric Vehicle Batteries',
        'Thermal Energy Storage',
        'Battery Recycling and Sustainability'
      ]
    }
  ]

  const speakers = [
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      name: 'Dr. James Anderson',
      title: 'Director of Renewable Energy Research',
      affiliation: 'MIT Energy Initiative, USA',
      bio: 'Leading expert in solar energy systems with over 20 years of experience in renewable energy research and development.'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      name: 'Prof. Maria Schmidt',
      title: 'Chair of Sustainable Engineering',
      affiliation: 'Technical University of Munich, Germany',
      bio: 'Pioneer in green hydrogen technologies and sustainable fuel systems, author of 150+ research papers.'
    },
    {
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      name: 'Dr. Raj Patel',
      title: 'Chief Sustainability Officer',
      affiliation: 'Global Energy Solutions, India',
      bio: 'Expert in net-zero technologies and carbon capture, leading major sustainability initiatives across Asia.'
    },
    {
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      name: 'Dr. Sarah Chen',
      title: 'Professor of Clean Energy Systems',
      affiliation: 'Stanford University, USA',
      bio: 'Renowned researcher in smart grid technologies and energy storage solutions with multiple patents.'
    }
  ]

  const tickets = [
    {
      name: 'Student',
      icon: '🎓',
      price: '$199',
      benefits: [
        'Access to all sessions',
        'Conference materials',
        'Networking events',
        'Certificate of attendance',
        'Student ID required'
      ]
    },
    {
      name: 'Academic',
      icon: '📚',
      price: '$399',
      benefits: [
        'Access to all sessions',
        'Conference materials',
        'Networking events',
        'Certificate of attendance',
        'Workshop access',
        'Proceedings access'
      ]
    },
    {
      name: 'Industry',
      icon: '💼',
      price: '$599',
      benefits: [
        'Access to all sessions',
        'Conference materials',
        'VIP networking events',
        'Certificate of attendance',
        'Workshop access',
        'Exhibition booth discount',
        'Proceedings access'
      ]
    },
    {
      name: 'Virtual',
      icon: '💻',
      price: '$149',
      benefits: [
        'Live stream access',
        'Digital materials',
        'Virtual networking',
        'Certificate of attendance',
        'Recording access (30 days)'
      ]
    }
  ]

  const sponsorTiers = [
    {
      name: 'Platinum',
      icon: '💎',
      price: '$50,000',
      benefits: [
        'Prime exhibition booth',
        'Keynote speaking opportunity',
        'Logo on all materials',
        '10 complimentary passes',
        'VIP networking access',
        'Exclusive branding opportunities'
      ]
    },
    {
      name: 'Gold',
      icon: '🥇',
      price: '$25,000',
      benefits: [
        'Premium exhibition booth',
        'Panel participation',
        'Logo on website & materials',
        '6 complimentary passes',
        'Networking access',
        'Brand visibility'
      ]
    },
    {
      name: 'Silver',
      icon: '🥈',
      price: '$10,000',
      benefits: [
        'Standard exhibition booth',
        'Logo on website',
        '3 complimentary passes',
        'Networking access',
        'Brand recognition'
      ]
    }
  ]

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleContactSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! This is a demo form.')
    setContactForm({ name: '', email: '', subject: '', message: '' })
  }

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section id="hero" className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-badge">🌱 CLEANENGTECHSUMMIT2026</div>
            <h1 className="hero-title">
              Global Summit on Clean Energy<br />and Sustainable Technologies
            </h1>
            <div className="hero-details">
              <span className="hero-date">📅 March 8–10, 2027</span>
              <span className="hero-divider">|</span>
              <span className="hero-location">📍 Venue TBA</span>
            </div>
            <p className="hero-description">
              Join global leaders, innovators, and researchers in shaping the future of clean energy 
              and sustainable technologies. Together, we're building a greener tomorrow.
            </p>
            
            <CountdownTimer targetDate="2027-03-08T00:00:00" />
            
            <div className="hero-cta">
              <a href="#register" className="cta-button">Register Now</a>
              <a href="#contact" className="cta-button cta-button-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section id="impact" className="impact-section">
        <div className="impact-container">
          <h2 className="section-title">Global Impact</h2>
          <div className="impact-grid">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="impact-card">
                <div className="impact-number">{metric.number}</div>
                <div className="impact-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="section-title">About the Summit</h2>
          <p className="section-subtitle">Driving Innovation for a Sustainable Future</p>
          
          <div className="about-image-banner">
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80" 
              alt="Sustainable technology conference"
              className="about-banner-img"
            />
          </div>

          <div className="about-content-grid">
            <div className="about-content-item">
              <h3>Our Vision</h3>
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

            <div className="about-content-item">
              <h3>Why Attend?</h3>
              <div className="why-attend-grid">
                <div className="why-attend-item">
                  <span className="why-icon">🎯</span>
                  <h4>Cutting-Edge Research</h4>
                  <p>Access the latest innovations in clean energy</p>
                </div>
                <div className="why-attend-item">
                  <span className="why-icon">🤝</span>
                  <h4>Global Networking</h4>
                  <p>Connect with industry leaders worldwide</p>
                </div>
                <div className="why-attend-item">
                  <span className="why-icon">💡</span>
                  <h4>Knowledge Exchange</h4>
                  <p>Participate in workshops and panels</p>
                </div>
                <div className="why-attend-item">
                  <span className="why-icon">🌍</span>
                  <h4>Sustainability Impact</h4>
                  <p>Contribute to a greener future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS SECTION */}
      <section id="tracks" className="tracks-section">
        <div className="tracks-container">
          <h2 className="section-title">Conference Tracks</h2>
          <p className="section-subtitle">
            Explore Our Focus Areas in Clean Energy and Sustainability
          </p>
          
          <div className="tracks-grid">
            {tracks.map((track, index) => (
              <div key={index} className="track-card">
                <div className="track-icon">{track.icon}</div>
                <h3 className="track-title">{track.title}</h3>
                <ul className="track-topics">
                  {track.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section id="speakers" className="speakers-section">
        <div className="speakers-container">
          <h2 className="section-title">Featured Speakers</h2>
          <p className="section-subtitle">
            Meet the Visionaries Shaping Our Sustainable Future
          </p>
          
          <div className="speakers-grid">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>

          <p className="speakers-note">
            More speakers will be announced soon. Stay tuned for updates!
          </p>
        </div>
      </section>

      {/* VENUE SECTION */}
      <section id="venue" className="venue-section">
        <div className="venue-container">
          <h2 className="section-title">Venue</h2>
          <p className="section-subtitle">A Sustainable Location for a Sustainable Summit</p>
          
          <div className="venue-image-banner">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
              alt="Modern sustainable city"
              className="venue-banner-img"
            />
          </div>

          <div className="venue-features">
            <div className="venue-feature">
              <div className="feature-icon">🌱</div>
              <h3>Eco-Friendly Facilities</h3>
              <p>LEED-certified buildings with renewable energy systems</p>
            </div>
            <div className="venue-feature">
              <div className="feature-icon">🚇</div>
              <h3>Accessible Transportation</h3>
              <p>Easy access via public transport and EV charging stations</p>
            </div>
            <div className="venue-feature">
              <div className="feature-icon">🏨</div>
              <h3>Sustainable Accommodations</h3>
              <p>Partner hotels with green certifications</p>
            </div>
            <div className="venue-feature">
              <div className="feature-icon">🌍</div>
              <h3>Carbon Neutral Event</h3>
              <p>Offsetting all event emissions through verified programs</p>
            </div>
          </div>

          <div className="venue-announcement">
            <p>Venue announcement expected by September 2026</p>
            <p>Stay tuned for updates!</p>
          </div>
        </div>
      </section>

      {/* REGISTRATION SECTION */}
      <section id="register" className="register-section">
        <div className="register-container">
          <h2 className="section-title">Registration</h2>
          <p className="section-subtitle">
            Secure Your Spot at CLEANENGTECHSUMMIT2026
          </p>
          
          <div className="tickets-grid">
            {tickets.map((ticket, index) => (
              <div key={index} className="ticket-card">
                <div className="ticket-icon">{ticket.icon}</div>
                <h3 className="ticket-name">{ticket.name}</h3>
                <div className="ticket-price">{ticket.price}</div>
                <ul className="ticket-benefits">
                  {ticket.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <button className="ticket-button">Select</button>
              </div>
            ))}
          </div>

          <div className="register-note">
            <p>Early bird discounts available until December 31, 2026</p>
            <p>Group registration discounts available for 5+ attendees</p>
          </div>
        </div>
      </section>

      {/* SPONSORS SECTION */}
      <section id="sponsors" className="sponsors-section">
        <div className="sponsors-container">
          <h2 className="section-title">Become a Sponsor</h2>
          <p className="section-subtitle">
            Partner with Us to Shape the Future of Clean Energy
          </p>
          
          <div className="sponsor-tiers-grid">
            {sponsorTiers.map((tier, index) => (
              <div key={index} className="sponsor-tier-card">
                <div className="sponsor-tier-icon">{tier.icon}</div>
                <h3 className="sponsor-tier-name">{tier.name}</h3>
                <div className="sponsor-tier-price">{tier.price}</div>
                <ul className="sponsor-tier-benefits">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
                <button className="sponsor-tier-button">Become a Sponsor</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Get in Touch with Our Team</p>
          
          <div className="contact-content">
            <div className="contact-form-wrapper">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cta-button">Send Message</button>
              </form>
            </div>

            <div className="contact-info-wrapper">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info@cleanengtechsummit2026.sciengasummits.com">
                      info@cleanengtechsummit2026.sciengasummits.com
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📅</div>
                  <div>
                    <h4>Event Dates</h4>
                    <p>March 8-10, 2027</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">🌐</div>
                  <div>
                    <h4>Website</h4>
                    <p>cleanengtechsummit2026.sciengasummits.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
