import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
   let myObj ={
    username:"yash saxena",
    age:24
   }
  return (
    <>
      <h1 className='bg-green-400 text-white rounded-xl p-2 mb-4'>Tailwind  test</h1>
      <Card object ={myObj}/>
    </>
  )
}

export default App
