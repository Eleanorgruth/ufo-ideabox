import React from "react"

const Ideas = ({ description, location, key}) => {
  return (
    <div>
      <p>{description}</p>
      <p>{location}</p>
    </div>
  )
}
export default Ideas