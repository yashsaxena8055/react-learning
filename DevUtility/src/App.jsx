import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRef } from 'react'


import './App.css'
import { Dropdown, InputBox } from './component'
import { getDropDownMenu ,generateUtility} from './service/CommonService'


function App() {
  const menu = getDropDownMenu();
  const [inputText,setInputText] = useState('');
  const [optionSelected,setOptionSelected] = useState('');
  let output = '';

  const hasPageBeenRendered= useRef(false);

  const generateBtn = ()=> 
    {
     
    
     document.getElementById('outputBox').innerText =  generateUtility(optionSelected,inputText);
    }
   
    
   

  return (
    <>
      <nav>
      <Dropdown   object ={menu}   setOptionSelected={setOptionSelected} ></Dropdown>
      </nav>
      <div className="content">
        <div id='content-item'><InputBox  id='inputBox' handleInputText={setInputText} ></InputBox></div>
        <div id='content-item'><InputBox id='outputBox'></InputBox></div>
      </div>
      <div id='generateBtn'  ><button onClick={generateBtn}>Generate</button></div>
    </>
  )
}

export default App
