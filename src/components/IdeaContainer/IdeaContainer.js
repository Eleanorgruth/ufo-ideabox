import React from "react";
import Ideas from "../Ideas/Ideas";
import "./IdeaContainer.css"

const IdeaContainer = ({ data, deleteIdea }) => {
  console.log("DATA", data)
  const cards = data.map(card => {
    return (
    <Ideas 
    location={card.location}
    description={card.description}
    deleteIdea={deleteIdea}
    id={card.id}
    key={card.id}
    />
    )
  })
  return (
    <div className="ideas-container">
      {cards}
    </div>
  )
}

export default IdeaContainer