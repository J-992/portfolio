import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Home, About, Projects, Contact} from './pages';
import NavBar from './components/NavBar';
import { useState } from 'react';


const App = () => {


  return (
    <main className='bg-slate-300/20'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </main>
  )
}

export default App