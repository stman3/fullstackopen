import React,  {useState,useEffect} from 'react'
import Filter from './componet/Filter'
import PersonForm from './componet/PersonForm'
import Persons from './componet/Persons'
import personsService from './services/persons'
import Notification from './componet/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter, setfilter] = useState('')
  const [message,setMessage]=useState(null)


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
 const addPerson = (event) => {
  event.preventDefault()
  const person = persons.filter((person) =>
      person.name === newName
  )

  const personToAdd = person[0]
  const updatedPerson = { ...personToAdd, number: newNumber }

  if (person.length !== 0) {
    if (window.confirm(`${personToAdd.name} is already added to the phonebook, replace the old number with a new one ?`)) {
      personsService
        .update(updatedPerson.id, updatedPerson).then(returnedPerson => {
          console.log(`${returnedPerson.name} successfully updated`)
          setPersons(persons.map(personItem => personItem.id !== personToAdd.id ? personItem : returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(
            `${updatedPerson.name} was successfully updated`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch((error) => {
          console.log(error)
          setPersons(persons.filter(person => person.id !== updatedPerson.id))
          setNewName('')
          setNewNumber('')
          setMessage(
            `[ERROR] ${updatedPerson.name} was already deleted from server`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  } else {
      const personToAdd = {
          name: newName,
          number: newNumber
        }
        personsService
          .create(personToAdd)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage(
              `Added ${newName}`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            setMessage(
              `[ERROR] ${error.response.data.error}`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            console.log(error.response.data)
          })
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
      <Notification message={message}/>
      <Filter value={filter} onChange={handlefilterChange}/>
      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
     <Persons PersonToShow={PersonToShow} deletes={deletePerson}/>

    </div>
  )
}





export default App