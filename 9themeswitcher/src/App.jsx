import React, { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import{themeButton} from './components/ThemeButton';
import {card} from './components/Card';


function App() {
  
  const [themeMode,setThemeMode] = useState("light");
  
  const lightTheme = () =>{

    setThemeMode("light");

  }
  const darkTheme = () =>{

    setThemeMode("dark");

  }

  // actual change in theme

  useEffect(()=>{

   document.querySelector('html').classList.remove("light","dark");
   document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <>
    <h1>hello world</h1>
{/* 
  <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
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

            </ThemeProvider>  */}
    </>
  )
}

export default App
