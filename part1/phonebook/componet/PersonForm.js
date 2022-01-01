import React from "react";



const PersonForm = (props)=>{
    return(
        <form onSubmit={props.onSubmit}>
        <h2>add a new</h2>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm