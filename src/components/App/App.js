import React, { Component } from 'react';
import './App.css';
import getData from '../../apiCalls';
import IdeaContainer from "../IdeaContainer/IdeaContainer"

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
  render() {
    return (
      <main>
        <h1>UFO Sightings</h1>
        <IdeaContainer data={this.state.data}/>
      </main>
    )
  }
}
export default App;
