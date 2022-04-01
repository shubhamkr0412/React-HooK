import React from 'react';
import {useState} from 'react'
import './App.css';
import Usestate from './Components/Usestate';
import Useeffect from './Components/Useeffect';
import useReducer from './Components/useReducer';


const reducer=(state,action)=>{
  if(action==="Incr"){
    state=state+1;
  }
  if(action==="Decr"){
    state=state-1;
  }
}


const App = () => {
  const intiadata=10;
  const [state,dispatch]=useReducer(reducer,intiadata)
  return (
    <div>App</div>
  )
}

export default App
