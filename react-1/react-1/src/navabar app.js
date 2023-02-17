import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
         <Router>
            <Navbar/>
            <Routes>
              <Route path="/product" element={<Product/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </Router>         
    </div>
  )
}

export default App