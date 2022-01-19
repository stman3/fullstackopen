import React from "react";




const Persons =({PersonToShow,deletes})=>{
    return(
        <div>
        {PersonToShow.map((person)=>
        <Show person={person} key={person.id} deletes={()=>deletes(person)}/>
        )}
      </div>
    )

}

const Show=({person,deletes})=>{
    return(
      <div>
        {person.name} {person.number}
        <button onClick={deletes}>delete</button>
      </div>
    )
    }

export default Persons