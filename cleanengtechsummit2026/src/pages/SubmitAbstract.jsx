import { useState } from 'react'
import './SubmitAbstract.css'

function SubmitAbstract() {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    affiliation: '',
    email: '',
    track: '',
    abstract: ''
  })

  const tracks = [
    'Clean Energy Systems',
    'Green Hydrogen',
    'Net Zero Technologies',
    'Sustainable Engineering',
    'Smart Cities & Infrastructure',
    'Energy Storage & Batteries'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your submission! This is a demo form.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="submit-abstract-page">
      <section className="submit-hero">
        <div className="submit-hero-content">
          <h1>Submit Your Abstract</h1>
          <p>Share Your Research with the Global Community</p>
        </div>
      </section>

      <section className="section submit-section">
        <div className="submit-container">
          <div className="submit-guidelines">
            <h2>Submission Guidelines</h2>
            <ul>
              <li>Abstracts should be between 250-300 words</li>
              <li>Include title, authors, and affiliations</li>
              <li>Select the most relevant track for your research</li>
              <li>Submissions must be in English</li>
              <li>Original research only - no plagiarism</li>
              <li>Deadline: December 31, 2026</li>
            </ul>
          </div>

          <div className="submit-form-wrapper">
            <h2>Abstract Submission Form</h2>
            <form onSubmit={handleSubmit} className="submit-form">
              <div className="form-group">
                <label htmlFor="title">Abstract Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="authors">Authors *</label>
                <input
                  type="text"
                  id="authors"
                  name="authors"
                  placeholder="John Doe, Jane Smith"
                  value={formData.authors}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="affiliation">Affiliation *</label>
                <input
                  type="text"
                  id="affiliation"
                  name="affiliation"
                  value={formData.affiliation}
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
                <label htmlFor="track">Select Track *</label>
                <select
                  id="track"
                  name="track"
                  value={formData.track}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a track...</option>
                  {tracks.map((track, index) => (
                    <option key={index} value={track}>{track}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="abstract">Abstract (250-300 words) *</label>
                <textarea
                  id="abstract"
                  name="abstract"
                  rows="8"
                  value={formData.abstract}
                  onChange={handleChange}
                  required
                ></textarea>
                <span className="char-count">{formData.abstract.length} characters</span>
              </div>
              <button type="submit" className="cta-button">Submit Abstract</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubmitAbstract
