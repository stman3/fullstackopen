import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson=(event)=>{
    if(!(persons.some(person=>person.name===newName))){
      event.preventDefault()
      console.log(event.target)
      const personObjet={
        name:newName,
      }
      setPersons(persons.concat(personObjet))
      setNewName('')
    }
    else window.alert(`${newName} is already added to phonebook`)
   
  }
  const handlePersonChange =(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person,i)=>
        <Show person={person} key={i}/>

        )}
      </div>

    </div>
  )
}

const Show=(props)=>{
  return(
    <div>{props.person.name}</div>
  )

}


export default App