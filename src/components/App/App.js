import React, { Component } from 'react';
import './App.css';
// import { getData, deleteData, postData } from '../../apiCalls';
import IdeaContainer from "../IdeaContainer/IdeaContainer"
import Form from "../Form/Form"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  addIdea = (newIdea) => {
    fetch('http://localhost:3001/sightings', {
        method: "POST",
        body: JSON.stringify({
          id: newIdea.id,
          location: newIdea.location,
          description: newIdea.description
        }),
        headers: {
            'Content-Type': 'application/JSON'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            } else {
                return response.json()
            }
        })
    .then(response => {
      // console.log("DATA", data)
      this.setState({data: [...this.state.data, response]})
    })
    .catch(error => console.log(error))
  }

  deleteIdea = (id) => {
    fetch(`http://localhost:3001/sightings/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/JSON' },
    })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            } else {
                return response.json()
            }
        })
    .then(response => this.setState({data: response}))
  }
  componentDidMount() {
    fetch('http://localhost:3001/sightings')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText)
        } else {
            return response.json()
        }
    })
      .then(response => {
        console.log("DATA1", response)
        this.setState({data: response})
      })
  }
  render() {
    return (
      <main>
        <h1>UFO Sightings</h1>
        <Form addIdea={this.addIdea}/>
        <IdeaContainer data={this.state.data} deleteIdea={this.deleteIdea} />
      </main>
    )
  }
}
export default App;
