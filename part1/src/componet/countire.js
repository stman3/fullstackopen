import React from "react";





const Countire =({countire})=>{

    return(
        <div>
            <h1>{countire.name}</h1>
            <p>capital {countire.capital}</p>
            <p>population {countire.population}</p>
            <h1>languages</h1>
            <ul>
            {countire.languages.map((countire,i)=>
                <li key={i}>{countire.name}</li>
                )}
            </ul>
            <img src={countire.flag} alt="Country flage"></img>
        </div>
    )

}


export default Countire