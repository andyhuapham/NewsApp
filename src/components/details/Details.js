import React from 'react'
import './details.css'

const Details = ({ data, backToList }) => {
  return (
    <div className="details-container">
      <div key={data.title} className="details-card">
        <h6>{data.title}</h6>
        <div style={{ position: 'relative' }}>
          <img src={data.urlToImage} alt={''} />
        </div>
        <p>{data.description}</p>
        <button className="no-underline tag-style" onClick={backToList}>
          Back To List
        </button>
      </div>
    </div>
  )
}

export default Details
