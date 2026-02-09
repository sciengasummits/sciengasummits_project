import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! This is a demo form.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const faqs = [
    {
      question: 'When is the summit?',
      answer: 'The summit will be held from March 8-10, 2027.'
    },
    {
      question: 'Where will the summit take place?',
      answer: 'The venue will be announced soon. Stay tuned for updates.'
    },
    {
      question: 'Can I submit multiple abstracts?',
      answer: 'Yes, you can submit multiple abstracts across different tracks.'
    },
    {
      question: 'Is virtual attendance available?',
      answer: 'Yes, we offer virtual attendance options with live streaming and recordings.'
    }
  ]

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in Touch with Our Team</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cta-button">Send Message</button>
              </form>
            </div>

            <div className="contact-info-wrapper">
              <h2>Contact Information</h2>
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

      <section className="section faq-section">
        <div className="faq-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
