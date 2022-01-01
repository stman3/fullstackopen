import React from "react";




const Persons =({PersonToShow})=>{
    return(
        <div>
        {PersonToShow.map((person)=>
        <Show person={person} key={person.id}/>

        )}
      </div>
    )

}

const Show=({person})=>{
    return(
      <div>{person.name} {person.number}</div>
    )
    }

export default Persons