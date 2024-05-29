import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import {ThemeProvider,Card,ThemeBtn} from './context/Theme'
// import{ThemeButton} from './components/ThemeButton';
// import {Card} from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hello</h1>
     <ThemeProvider >
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                  <h1>hello</h1>
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton></ThemeButton>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card></Card>
                    </div>
                </div>
            </div>

            </ThemeProvider> 
    </>
  )
}

export default App
