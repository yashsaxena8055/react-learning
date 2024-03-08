import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
  let [counter,setCounter]= useState(5)
  // const used for fixed
   //let counter = 5;
   const addValue = ()=>{
    console.log("value added",counter);
    if(counter + 1 > 20){
      alert("counter cannot be greater then 20 ")
      return;
    }
    setCounter(counter +1)
   }
   const removeValue = ()=>{
    console.log("value removed",counter);
    if(counter - 1 < 0){
      alert("counter cannot be negative")
      return;
    }
    setCounter(counter -1)
   }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>Add value {counter}</button><br>
     </br>
     <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
