import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dropdown, InputBox } from './component'
import { getDropDownMenu } from './service/CommonService'


function App() {
  const menu = getDropDownMenu();
  const [inputText,setInputText] = useState('');

  const handleInputText = (text)=>{
    setInputText(text);
  }
  console.log(inputText);

  return (
    <>
      <nav>
      <Dropdown object ={menu} ></Dropdown>
      </nav>
      <div className="content">
        <div id='content-item'><InputBox handleInputText={handleInputText} ></InputBox></div>
        <div id='content-item'><InputBox id={'output'}></InputBox></div>
      </div>
      <div id='generateBtn'><button>Generate</button></div>
    </>
  )
}

export default App
