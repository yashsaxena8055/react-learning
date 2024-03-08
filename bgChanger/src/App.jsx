import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color,height:'100vh',width:'1000vh'}}> 
        <div style={{display:'flex',alignItems:'center'}}>
          <div style={{margin:"0px 50px"}}>1</div>
          <div style={{margin:"0px 50px"}}>2</div>
          <div style={{margin:"0px 50px"}}>3</div>
          <div style={{margin:"0px 50px"}}>4</div>
        </div>
      
      </div>
    </>
  )
}

export default App
