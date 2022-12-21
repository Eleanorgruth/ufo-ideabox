import React, { useState } from "react";
import './Form.css'

const Form = () => {
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
    this.props.addIdea(newIdea)
    clearInputs()
  }
  
    return (
      <form>
        <input
          placeholder="Location"
          name="location"
          value={location}
          type="text"
          onChange={() => changeLocation(location)}
        />
        <input
          placeholder="Description"
          name="description"
          value={description}
          type="text"
          onChange={() => changeDescription(description)}
        />
        <button onClick={(event)=> this.submitIdea(event)}>
          Submit
        </button>
      </form> 
    )
}

export default Form