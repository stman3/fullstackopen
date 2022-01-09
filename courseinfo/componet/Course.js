import React from "react"
import Header from "./Header"
import Content from "./content"

const Course = ({course})=>{
return(
    <div>
    <Header course = {course.name}/>
    <Content content = {course.parts} />
  </div>
)

}


export default Course