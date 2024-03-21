import { useState } from 'react'
import LoginPage from './pages/login'
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register';
import Dashboard from './pages/dashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
