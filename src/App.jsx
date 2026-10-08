import './App.css'
import Home from './components/home/Homes.jsx'
import Products from './components/products/Products.jsx'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

function App() {
  

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products />}/>
        </Routes>
      </BrowserRouter>
   
  
  )
}

export default App;
