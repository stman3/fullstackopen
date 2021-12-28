import React from "react"
import Part from './part'
import Total from './Total'

const Content =({content}) =>{
    return(
      <div>
        {content.map(content=><Part key={content.id} part={content}/>)}
        <Total Part={content}/>
      </div>
    )
  }

  export default Content