import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Submit Abstract', path: '/submit-abstract' }
  ]

  const importantLinks = [
    { name: 'Register', path: '/register' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Venue', path: '/venue' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>🌱 CLEANENGTECHSUMMIT2026</h3>
            <p>Global Summit on Clean Energy and Sustainable Technologies</p>
            <p className="footer-date">March 8–10, 2027</p>
            <p className="footer-location">Venue TBA</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Important</h4>
            <ul>
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <a href="mailto:info@cleanengtechsummit2026.sciengasummits.com">
                info@cleanengtechsummit2026.sciengasummits.com
              </a>
            </p>
            <div className="footer-social">
              <p>Follow us for updates</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} CLEANENGTECHSUMMIT2026. All rights reserved.</p>
          <p className="footer-tagline">Building a Sustainable Future Together</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
