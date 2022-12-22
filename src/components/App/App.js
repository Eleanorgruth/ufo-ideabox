import React, { useState, useEffect } from 'react';
import './App.css';
import { getData, deleteData, postData } from '../../apiCalls';
import IdeaContainer from "../IdeaContainer/IdeaContainer"
import Form from "../Form/Form"

const App = () => {
  const [data, changeData] = useState([])

 const addIdea = (newIdea) => {
    postData(newIdea)
    .then(response => changeData([...data, response]))
    .catch(error => console.log(error))
  }

  const deleteIdea = (id) => {
    deleteData(id)
    .then(response => changeData(response))
  }
  const test = () => {
    getData()
      .then(response => changeData(response))

  }
useEffect(()=> {
  test()
}, [])

    return (
      <main>
        <h1>UFO Sightings</h1>
        <Form addIdea={addIdea}/>
        <IdeaContainer data={data} deleteIdea={deleteIdea} />
      </main>
    )
}
export default App;
