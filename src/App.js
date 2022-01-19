import React,  {useState,useEffect} from 'react'
import Filter from './componet/Filter'
import PersonForm from './componet/PersonForm'
import Persons from './componet/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter, setfilter] = useState('')


  useEffect(() => {
    console.log('effect')
      personsService.getAll()
      .then(initialPersons=>{
        console.log('promise fulfilled')
        setPersons(initialPersons)
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
        id:persons.at(-1).id+1,
      }
      personsService.create(personObjet)
      .then(returnedPerson=>{
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
    else{
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const person = persons.find(p=>p.name===newName)
        const changedPerson = {...person,number:newNumber}
        personsService.update(changedPerson.id,changedPerson)
        .then(returnedPerson=>{
          setPersons(persons.map(person=>person.id!==changedPerson.id? person:returnedPerson))
          setNewName('')
          setNewNumber('')
        })


      }
    }
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

  const deletePerson =(person)=>{
    if(window.confirm(`Delete ${person.name} ?`)){
      personsService.deletes(person.id)
      setPersons(persons.filter(p=>p.id!==person.id))
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
     
      <Filter value={filter} onChange={handlefilterChange}/>
      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
     <Persons PersonToShow={PersonToShow} deletes={deletePerson}/>

    </div>
  )
}





export default App