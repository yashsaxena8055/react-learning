import { useState } from 'react'
import './App.css'
import { UserConetxtProvider } from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
     <UserConetxtProvider>
      <Login></Login>
      <Profile></Profile>
      </UserConetxtProvider>
    </>
  )
}

export default App
