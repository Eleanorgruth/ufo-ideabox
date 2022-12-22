import React, { useState } from "react";
import './Form.css'

const Form = (props) => {
  const [location, changeLocation] = useState('')
  const [description, changeDescription] = useState('')

  const clearInputs = () => {
    changeDescription('')
    changeLocation('')
  }
  const submitIdea = (event) => {
    event.preventDefault()
    const newIdea = {
      location,
      description
    }
    props.addIdea(newIdea)
    clearInputs()
  }
  
    return (
      <form>
        <input
          placeholder="Location"
          name="location"
          value={location}
          type="text"
          onChange={(event) => changeLocation(event.target.value)}
        />
        <input
          placeholder="Description"
          name="description"
          value={description}
          type="text"
          onChange={(event) => changeDescription(event.target.value)}
        />
        <button onClick={(event)=>submitIdea(event)}>
          Submit
        </button>
      </form> 
    )
}

export default Form