import React from 'react'
import { useReducer } from 'react'
const reducer=(state,action)=>{
if(action.type==="INCR"){
    state=state+1;
}
if(state>0 && action.type==="DECR"){
    state=state-1;
}
return state;
}


const Usereducer = () => {
    const intialData=20;
    const [state,dispatch]=useReducer(reducer,intialData);
  return (
    <div>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"INCR"})} >Increament</button>
    <button onClick={()=>dispatch({type:"DECR"})}  >Decreament</button>
    </div>
  )
}

export default Usereducer