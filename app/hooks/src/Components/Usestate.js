import React from 'react'
import {useState} from 'react'
const Usestate = () => {
    const [val,setVal]=useState(0);
  return (
    <div><h1>{val}</h1>
    <> <button onClick={()=>setVal(val+1)}>Increament</button>
     <button onClick={()=>(val>0? setVal(val-1):setVal(0))}>Decreament</button></></div>
  )
}

export default Usestate