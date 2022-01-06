import React,{useState} from 'react'

const Button =({handleClick,text})=>(
  <button onClick={handleClick}>{text}</button>

)

const Statistice =({clicks})=>{
  const Total = clicks.good+clicks.bad+clicks.neutral
  const average = clicks.good/(Total)
  const positive = clicks.good * (100/Total)

  if(Total===0){
    return <p>No feedback given</p>

  }
  else{
    return(  
    <table>
      <StatisticLine text='good' value={clicks.good}/>
      <StatisticLine text='neutral' value={clicks.neutral}/>
      <StatisticLine text='bad' value={clicks.bad}/>
      <StatisticLine text='all' value={Total}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positive}/>
      </table>
      )

  }
  
}


const StatisticLine =({text,value})=>{
  if(text==='positive')
  return (
    <tr>
      <td>{text}</td>
      <td>{value}%</td>
    </tr>
   
    )
  else
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
    )
}

const App = () =>{
  const [clicks,setclicks] = useState({
    good:0,
    neutral:0,
    bad:0
  })
 

  const handleGoodClick = ()=>{
    setclicks({...clicks,good: clicks.good+1})
  }
  const handleBadClick = ()=>{
    setclicks({...clicks,bad:clicks.bad+1})
  }
  const handleneutalClick = ()=>{
    setclicks({...clicks,neutral:clicks.neutral+1})
  }
  

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleneutalClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Header text="statistics"/>
      <Statistice clicks={clicks}/>

    </div>
  )
}


const Header =(props)=>{
  return <h1>{props.text}</h1>
}



export default App