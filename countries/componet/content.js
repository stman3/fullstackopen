import React from "react";
import Countire from './countire'




const Content =({countires,setCountires})=>{


    if(countires.length>=10)
    return <p>Too many mathces.</p>;
    else if((countires.length>1&&countires.length<10)||countires.length===0){
        return(
            <ul>
                {countires.map((countire,i)=><li key={i}>{countire.name}<button onClick={()=>setCountires([countire])}>show</button></li>)}
            </ul>
        )
       
    }
    else{
        return(
            <Countire country={countires[0]}/>
        )
        
    }


}





export default Content