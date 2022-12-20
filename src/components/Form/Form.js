import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      location: "",
      description: ""
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  clearInputs = () => {
    this.setState({ location: "", description: ""})
  }
  submitIdea = (event) => {
    event.preventDefault()
    const newIdea = {
      ...this.state
    }
    this.props.addIdea(newIdea)
    this.clearInputs()
  }
  
  render() {
    return (
      <form>
        <input
          placeholder="Location"
          name="location"
          value={this.state.location}
          type="text"
          onChange={(event) => this.handleChange(event)}
        />
        <input
          placeholder="Description"
          name="description"
          value={this.state.description}
          type="text"
          onChange={(event) => this.handleChange(event)}
        />
        <button onClick={(event)=> this.submitIdea(event)}>
          Submit
        </button>
      </form> 
    )
  }
}

export default Form