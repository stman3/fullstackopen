import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import Content from './componet/content'




const App = () =>{
    const [countires,setCountires]=useState([])
    const [allConuntries,setAllCountires]=useState([])
    const [newFilter, setNewFilter] = useState("")
    useEffect(()=>{
        console.log('Effect')
        axios
        .get('https://restcountries.com/v2/all')
        .then(response=>{
            setAllCountires(response.data)
        })
    },[])

    
    const handleFilterChange=(event)=>{
        
        setNewFilter(event.target.value)  
        const regex = new RegExp(event.target.value,'i')
        const filtercountire = ()=> allConuntries.filter(countire=>countire.name.match(regex))
        setCountires(filtercountire)
        
    }

    return(
        <div>
            
            find conunter: <input value={newFilter} onChange={handleFilterChange} />
            
            <Content countires={countires} setCountires={setCountires}/>
        </div>
        
       
    )


}


export default App