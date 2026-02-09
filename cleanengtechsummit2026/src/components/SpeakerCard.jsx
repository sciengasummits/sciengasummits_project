import { useState } from 'react'
import './SpeakerCard.css'

function SpeakerCard({ speaker }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="speaker-card" onClick={() => setShowModal(true)}>
        <div className="speaker-image-wrapper">
          <img 
            src={speaker.image} 
            alt={speaker.name}
            className="speaker-image"
          />
        </div>
        <div className="speaker-info">
          <h3 className="speaker-name">{speaker.name}</h3>
          <p className="speaker-title">{speaker.title}</p>
          <p className="speaker-affiliation">{speaker.affiliation}</p>
          <button className="speaker-view-bio">View Bio</button>
        </div>
      </div>

      {showModal && (
        <div className="speaker-modal" onClick={() => setShowModal(false)}>
          <div className="speaker-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-header">
              <img src={speaker.image} alt={speaker.name} className="modal-image" />
              <div className="modal-header-text">
                <h2>{speaker.name}</h2>
                <p className="modal-title">{speaker.title}</p>
                <p className="modal-affiliation">{speaker.affiliation}</p>
              </div>
            </div>
            <div className="modal-body">
              <h3>Biography</h3>
              <p>{speaker.bio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SpeakerCard
