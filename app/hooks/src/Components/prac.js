function App() {
    const[max,setMax]=useState(0);
  function inCr(e){
    e=setMax(max+1);
    if(max>=10){
      e=setMax(max+10);
    }
    return e;
  }
    
    return (
     <>
       <h1>{max}</h1>
       <button onClick={inCr}>plus</button>
       <button onClick={()=>{setMax(max-1)}}> Minus</button>
     </>
      
    
      
    );
  }
  
  export default App;
  