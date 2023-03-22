import React from 'react'
import './card.css'

const Card = ({ data, handleChange }) => {
  return (
    <div className="container">
      {data.articles.map((article) => (
        <div key={article.title} className="card">
          <h6 className="truncate">{article.title}</h6>
          <img src={article.urlToImage} alt={''} />
          <p>{article.description}</p>
          <button
            className="no-underline tag-style"
            onClick={() => handleChange(article)}
          >
            More details
          </button>
        </div>
      ))}
    </div>
  )
}

export default Card
