import React from 'react'

const App = () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header course = {course}/>
      <Content partc = {[part1,part2,part3]} exercisesec={[exercises1,exercises2,exercises3]} />
      <Total total={exercises1+exercises2+exercises3} />

    </div>
  )
}

const Header =(props) =>{
  return(
    <p>{props.course}</p>
  )

}
const Content =(props) =>{
  return(
    <div>
      <Part part={props.partc[0]} exercises={props.exercisesec[0]}/>
      <Part part={props.partc[1]} exercises={props.exercisesec[1]}/>
      <Part part={props.partc[2]} exercises={props.exercisesec[2]}/>
    </div>
  )
}
const Part = (props) =>{
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Total = (props)=>{
  return(
    <p>Number of exercises {props.total}</p>
  )
}
export default App