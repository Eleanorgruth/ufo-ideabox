import React from "react";
import Ideas from "../Ideas/Ideas";
import "./IdeaContainer.css"

const IdeaContainer = ({ data }) => {
  const cards = data.map(card => {
    return <Ideas 
      id={card.id}
      key={card.id}
      location={card.location}
      description={card.description}
    />
  })
  return (
    <div className="ideas-container">{cards}</div>
  )
}

export default IdeaContainer