import React from "react"
import "./Ideas.css"

const Ideas = ({ description, location, key}) => {
  return (
    <div className="ideas">
      <p>{description}</p>
      <p>{location}</p>
    </div>
  )
}
export default Ideas