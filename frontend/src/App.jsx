import React from 'react'

import { Route,Routes } from 'react-router-dom'
 import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import LoginPage from './pages/lOGINpAGE.JSX';
import SignupPage from './pages/SignupPage';
import Events from './pages/Events';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
  <>
    <Toaster/>
          <Routes>

    <Route path='/' element={<HomePage/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/signup' element={<SignupPage/>} />
    <Route path='/events' element={<Events/>} />
   <Route path='/profile' element={<ProfilePage/>} />
        </Routes>
  </>
  )
}

export default App