import './Tracks.css'

function Tracks() {
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

  return (
    <div className="tracks-page">
      <section className="tracks-hero">
        <div className="tracks-hero-content">
          <h1>Conference Tracks</h1>
          <p>Explore Our Focus Areas in Clean Energy and Sustainability</p>
        </div>
      </section>

      <section className="section tracks-section">
        <div className="tracks-container">
          <p className="section-subtitle">
            Join specialized sessions covering the most critical areas in clean energy and sustainable technologies
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
    </div>
  )
}

export default Tracks
