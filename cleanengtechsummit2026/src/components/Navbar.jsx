import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Tracks', id: 'tracks' },
    { name: 'Speakers', id: 'speakers' },
    { name: 'Venue', id: 'venue' },
    { name: 'Sponsors', id: 'sponsors' },
    { name: 'Contact', id: 'contact' }
  ]

  const handleLinkClick = (id) => {
    scrollToSection(id)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="navbar-logo">
          <span className="logo-icon">🌱</span>
          <span className="logo-text">CLEANENGTECHSUMMIT2026</span>
        </a>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="navbar-item">
              <a 
                href={`#${link.id}`}
                className="navbar-link"
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="navbar-item navbar-cta">
            <a 
              href="#register"
              className="navbar-button"
              onClick={(e) => { e.preventDefault(); scrollToSection('register'); }}
            >
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
