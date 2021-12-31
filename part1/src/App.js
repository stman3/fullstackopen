import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson=(event)=>{
    event.preventDefault()
    const personObjet={
      name:newName,
    }
    setPersons(persons.concat(personObjet))
    setNewName('')

  }
  const handlePersonChange =(event)=>{
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