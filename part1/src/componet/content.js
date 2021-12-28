import React from "react"
import Part from './part'

const Content =(props) =>{
    return(
      <div>
        <Part part={props.content[0]}/>
        <Part part={props.content[1]}/>
        <Part part={props.content[2]}/>
      </div>
    )
  }

  export default Content