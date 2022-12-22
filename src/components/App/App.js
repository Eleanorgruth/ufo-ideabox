import React, { useState, useEffect } from 'react';
import './App.css';
import { getData, deleteData, postData } from '../../apiCalls';
import IdeaContainer from "../IdeaContainer/IdeaContainer"
import Form from "../Form/Form"

const App = () => {
  const [data, changeData] = useState([])

  const addIdea = async (newIdea) => {
    try {
      const response = await postData(newIdea)
      changeData([...data, response])
    }
    catch (error) {
      console.log(error)
    }
  }
  const deleteIdea = async (id) => {
    const response = await deleteData(id)
    changeData(response)
  }
  const test = async () => {
    const response = await getData()
    changeData(response)

  }
  //UseEffect can only return a clean-up function or nothing at all, so we havew to write the test() function outside of it and call it inside 
  useEffect(() => {
    test()
  }, [])

  return (
    <main>
      <h1>UFO Sightings</h1>
      <Form addIdea={addIdea} />
      <IdeaContainer data={data} deleteIdea={deleteIdea} />
    </main>
  )
}
export default App;
