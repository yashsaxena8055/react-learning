import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [Password,setPassword] = useState();

  const passwordGenerator = useCallback(()=>{
    
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVWSYZabcdefghijklmnopqurstuvwxvz";
    if(numAllowed)str +="0123456789";
    if(charAllowed)str +="!@#$%^&*()_+~`\":<";
    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char);
    }
    
     setPassword(pass);


  },[length,numAllowed,charAllowed,setPassword]);
   
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

 // Ref hook
 const passwordRef = useRef(null);
  
 const copyPasswordToClipBoard = useCallback(()=>{
   passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,3)
   window.navigator.clipboard.writeText(Password);
     


 },[Password]);

  return (
    <>
      <h1 className=' text-orange-500'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex  flex-row shadow rounded-lg mb-4'>
        <input  className='outline-none w-full py-1 px-3' ref={passwordRef} placeholder='password' readOnly type="text" value={Password}/>
        <button className='bg-white rounded-lg ml-5' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex flex-row gap-x-1'>
               <input type="range"  min={6} max={100} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} value={length}/>
               <label htmlFor="">Length:{length}</label>
        
        <input type="checkbox"  defaultChecked={numAllowed} id='numberInput' onChange={()=>{
            setNumAllowed((prev)=>!prev)
            }}/>
            <label htmlFor="numberInput"> Numbers</label>
            <input type="checkbox"  defaultChecked={charAllowed} id='charInput' onChange={()=>{
            setCharAllowed((prev)=>!prev)
            }}/>
            <label htmlFor="charInput"> Character</label>
            </div>
      
        </div>
    </>
  )
}

export default App
