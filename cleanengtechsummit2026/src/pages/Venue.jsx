import './Venue.css'

function Venue() {
  return (
    <div className="venue-page">
      <section className="venue-hero">
        <div className="venue-hero-content">
          <h1>Venue</h1>
          <p>A Sustainable Location for a Sustainable Summit</p>
        </div>
      </section>

      <section className="section venue-section">
        <div className="venue-container">
          <div className="venue-image-banner">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
              alt="Modern sustainable city"
              className="venue-banner-img"
            />
          </div>

          <div className="venue-content">
            <h2 className="section-title">Venue Details Coming Soon</h2>
            <p>
              We are carefully selecting a venue that aligns with our commitment to sustainability 
              and environmental responsibility. The location will feature:
            </p>
            
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
        </div>
      </section>
    </div>
  )
}

export default Venue
