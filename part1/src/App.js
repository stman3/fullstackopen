import React,  {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter, setfilter] = useState('')
  
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
      setPersons(persons.concat(personObjet))
      setNewName('')
      setNewNumber('')
    }
    else window.alert(`${newName} is already added to phonebook`)
   
  }
  const handlePersonChange =(event)=>{
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
      <div>
        filter shown with<input value={filter} onChange={handlefilterChange}/>
      </div>
      
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {PersonToShow.map((person)=>
        <Show person={person} key={person.id}/>

        )}
      </div>

    </div>
  )
}

const Show=({person})=>{
  return(
    <div>{person.name} {person.number}</div>
  )

}


export default App