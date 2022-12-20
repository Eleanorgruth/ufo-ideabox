import React from "react"
import "./Ideas.css"

const Ideas = ({ description, location, id, deleteIdea}) => {
  return (
    <div className="ideas">
      <p>{description}</p>
      <p>{location}</p>
      <button onClick={()=>deleteIdea(id)}>delete</button>
    </div>
  )
}
export default Ideas