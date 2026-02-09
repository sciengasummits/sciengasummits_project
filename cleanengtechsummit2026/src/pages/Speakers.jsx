import { useState } from 'react'
import SpeakerCard from '../components/SpeakerCard'
import './Speakers.css'

function Speakers() {
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

  return (
    <div className="speakers-page">
      <section className="speakers-hero">
        <div className="speakers-hero-content">
          <h1>Featured Speakers</h1>
          <p>Meet the Visionaries Shaping Our Sustainable Future</p>
        </div>
      </section>

      <section className="section speakers-section">
        <div className="speakers-container">
          <p className="section-subtitle">
            Learn from world-renowned experts and thought leaders in clean energy and sustainability
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
    </div>
  )
}

export default Speakers
