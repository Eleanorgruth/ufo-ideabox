import React, { Component } from "react";
import { postData } from "../../apiCalls";

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

  submitIdea = (event) => {
    event.preventDefault()
    postData("http://localhost:3001/sightings", this.state)
    .then(data=>{this.props.addIdea(data)})
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
        <button 
          onClick={(event)=> this.submitIdea(event)}
        >Submit</button>
      </form>


    )
  }
}

export default Form