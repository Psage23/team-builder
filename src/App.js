import React, { useState, useEffect } from "react";
import Form from "./components/form";
import data from "./components/data";
import PeopleList from "./components/peoplelist";
import './App.css';


function App() {
  const [peoples, setPeoples] = useState([])

  useEffect(() => {
    setPeoples(data)
  }, [])

  const addNewForm = e => {
    const newForm = setPeoples([...peoples, e])
  }
  return (
    <div className="App">
      <div className="title">
        <h1>Best Team Ever</h1>
        <h2>Submit your information below!</h2>
      </div>
      <Form addNewForm = {addNewForm}/>
      {peoples.map(people => {
        return <PeopleList key={people.id} info={people}/>
      })}
    </div>
  );
}

export default App;
