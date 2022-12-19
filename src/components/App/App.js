import React, { Component } from 'react';
import './App.css';
import { getData } from '../../apiCalls';
import IdeaContainer from "../IdeaContainer/IdeaContainer"
import Form from "../Form/Form"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    getData("http://localhost:3001/sightings")
      .then(data=> {
        this.setState({data: data})})
  }
  addIdea = (newIdea) => {
    this.setState({data: [...this.state.data, newIdea]})
  }
  render() {
    return (
      <main>
        <h1>UFO Sightings</h1>
        <Form addIdea={this.addIdea}/>
        <IdeaContainer data={this.state.data}/>
      </main>
    )
  }
}
export default App;
