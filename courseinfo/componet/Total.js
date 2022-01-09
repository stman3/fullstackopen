import React from "react";



const Total=({Part})=>{
    const total = Part.reduce((v,c)=>v+c.exercises,0)
    return <div>total of {total} exercise</div>
    
}


export default Total