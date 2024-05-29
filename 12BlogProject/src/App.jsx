import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './config/conf';
import { useDispatch } from 'react-redux';
import { authService } from './appwrite/auth';
import { useEffect } from 'react';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (dispatch) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }

      }).catch(console.error()).finally(() => setLoading(false))

  }, [])




  return (!loading ? (<>

    <div className='min-h-screen flex flex-col content-between bg-gray-400'>
    <Header></Header>
    <h1>  test</h1>
     
       <Footer>  </Footer>
       </div>
    
  
  </>) : null

  )
}

export default App
