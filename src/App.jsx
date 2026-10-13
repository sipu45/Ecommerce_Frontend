import './App.css'
import Home from './components/home/Homes.jsx'
import Products from './components/products/Products.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  

  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
   
  
  )
}

export default App;
