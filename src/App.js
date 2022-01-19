import React,  {useState,useEffect} from 'react'
import Filter from './componet/Filter'
import PersonForm from './componet/PersonForm'
import Persons from './componet/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter, setfilter] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')
  
 const PersonToShow = persons.filter(person=>person.name.includes(filter))
  const addPerson=(event)=>{
    if(!(persons.some(person=>person.name===newName))){
      event.preventDefault()
      console.log(event.target)
      const personObjet={
        name:newName,
        number:newNumber,
        id:persons.length+1,
      }
      axios.post('http://localhost:3001/persons',personObjet)
      .then(response=>{
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
    }
    else window.alert(`${newName} is already added to phonebook`)
   
  }
  const handleNameChange =(event)=>{
    console.log(`name: ${event.target.value}`)
    setNewName(event.target.value)
  }
  const handleNumberChange=(event)=>{
    console.log(`number: ${event.target.value}`)
    setNewNumber(event.target.value)
  }
  const handlefilterChange =(event)=>{
    console.log(`filter: ${event.target.value}`)
    setfilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
     
      <Filter value={filter} onChange={handlefilterChange}/>
      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
     <Persons PersonToShow={PersonToShow}/>

    </div>
  )
}





export default App