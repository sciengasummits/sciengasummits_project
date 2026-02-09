import './Sponsors.css'

function Sponsors() {
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

  return (
    <div className="sponsors-page">
      <section className="sponsors-hero">
        <div className="sponsors-hero-content">
          <h1>Become a Sponsor</h1>
          <p>Partner with Us to Shape the Future of Clean Energy</p>
        </div>
      </section>

      <section className="section sponsors-section">
        <div className="sponsors-container">
          <p className="section-subtitle">
            Join leading organizations in supporting sustainable innovation and clean energy advancement
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

          <div className="sponsor-cta-section">
            <h2>Interested in Sponsorship?</h2>
            <p>Contact us to discuss custom sponsorship packages tailored to your organization's goals</p>
            <a href="mailto:sponsors@cleanengtechsummit2026.sciengasummits.com" className="cta-button">
              Contact Sponsorship Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sponsors
