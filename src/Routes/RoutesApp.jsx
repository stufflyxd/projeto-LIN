import { BrowserRouter, Route, Routes } from "react-router-dom"


import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import User from '../pages/User/User'
import Register from '../pages/Register/Register'

const RoutesApp = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/register' element= {<Register/>}/>
      <Route path='*' element= {<h1>Not found</h1>}/>
    </Routes>
    
    </BrowserRouter>
)
}

export default RoutesApp