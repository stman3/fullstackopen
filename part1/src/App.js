import React,{useState} from 'react'

const Button =({handleClick,text})=>(
  <button onClick={handleClick}>{text}</button>

)

const App = () =>{
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const handleGoodClick = ()=>{
    setGood(good+1)
  }
  const handleBadClick = ()=>{
    setBad(bad+1)
  }
  const handleneutalClick = ()=>{
    setNeutral(neutral+1)
  }
  

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleneutalClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}



export default App