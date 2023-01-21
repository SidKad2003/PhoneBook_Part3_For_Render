import './App.css';
import { useState } from 'react';
import Add from './components/Add';
import Setfilter from './components/Setfilter';
import Display from './components/Display';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/notes')
      .then(response => setPersons(response.data))
  }, [])
  // console.log(persons)
  const [newName, setNewName] = useState('')
  const [newcontact, setNewcontact] = useState('')
  const [show, setShow] = useState([])
  const [newfilter, setNewfilter] = useState('')
  const changing = (event) => {
    setNewName((event.target.value))
  }
  const changingfilter = (event) => {
    setNewfilter((event.target.value))
  }
  const changingcontact = (event) => {
    setNewcontact((event.target.value))
  }
  const addobj = {
    name: newName,
    number: newcontact,
    id: persons.length + 1,
    // date: new Date().toISOString(),
    // important: Math.random() < 0.5,
  }
  const filtering = () => {
    setShow(persons.filter(persons => persons.name === newfilter))
    console.log(show)
  }

  const addnew = (event) => {
    console.log(newName)
    setPersons(persons.concat(addobj))
    console.log(persons)
    alert(`${addobj.name} was Added with contact No. as ${addobj.number}`)
    axios.post('http://localhost:3001/notes', addobj)
    event.preventDefault()
  }

  return (
    <div>
      <h2>Add a New</h2>
      <Add addnew={addnew} changing={changing} changingcontact={changingcontact} />
      <h3>Filter</h3>
      <Setfilter changingfilter={changingfilter} filtering={filtering} />
      <Display persons={persons} show={show} />
    </div>

  )
}

export default App