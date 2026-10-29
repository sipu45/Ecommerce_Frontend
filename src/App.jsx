import './App.css'
import Home from './components/home/Homes.jsx'
import Products from './components/products/Products.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { Toaster } from 'react-hot-toast'
import React from 'react'
import Cart from './components/cart/Cart.jsx'
import Login from './components/auth/Login.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

function App() {
  

  return (
    <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products />}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/cart' element={<Cart/>}/>

              <Route path="/" element={<PrivateRoute publicPage />} >
                <Route path='/login' element={<Login />}/>

              </Route>

          </Routes>
        </BrowserRouter>
        <Toaster position='bottom-center'/>
     </React.Fragment>
   
  
  )
}

export default App;
