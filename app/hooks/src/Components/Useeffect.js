import React from 'react'
import { useEffect,useState} from 'react'

const Useeffect = () => {
    const [val,setVal]=useState(0);
    useEffect(()=>{
       document.title=`Click(${val+1})`;
    })
  return (
    <div>
    <h1><h1>{val}</h1></h1><button onClick={()=>setVal(val+1)}>Increament</button></div>
  )
}

export default Useeffect