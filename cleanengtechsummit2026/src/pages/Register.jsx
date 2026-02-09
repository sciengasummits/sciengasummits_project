import './Register.css'

function Register() {
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

  return (
    <div className="register-page">
      <section className="register-hero">
        <div className="register-hero-content">
          <h1>Registration</h1>
          <p>Secure Your Spot at CLEANENGTECHSUMMIT2026</p>
        </div>
      </section>

      <section className="section register-section">
        <div className="register-container">
          <p className="section-subtitle">
            Choose the registration category that best suits your needs
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
    </div>
  )
}

export default Register
