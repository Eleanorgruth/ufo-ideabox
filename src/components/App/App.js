import React, { Component } from 'react';
import './App.css';
import { getData, deleteData, postData } from '../../apiCalls';
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
    postData(newIdea)
    .then(response => this.setState({data: [...this.state.data, response]}))
    .catch(error => console.log(error))
  }

  deleteIdea = (id) => {
    deleteData(id)
    .then(response => this.setState({data: response}))
  }
  componentDidMount() {
    getData()
      .then(response =>
        this.setState({data: response}))
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
