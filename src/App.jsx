import React from 'react' 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

import ProtectedRoutes from './pages/protecteRoutes'
import Movies from './pages/Movies'
import SignUp from './pages/SignUp'
import MovieInfo from './pages/MovieInfo'




function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route element={< ProtectedRoutes />}>
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieInfo />}></Route>
      </Route>
    </Routes>
    </>
    
  )
}

export default App
