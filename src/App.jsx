import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Resume from './Pages/Resume/Resume'
import Skills from './Pages/Skills/Skills'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Particle from './Particle'

function App() {
  const [count, setCount] = useState(0)

   const location = useLocation();
   console.log(location);

   const renderParticlejJsxInHomePage = location.pathname === "/";
   

  return (
    <div className="app">

      {/* -------particles-------- */}

     {renderParticlejJsxInHomePage && <Particle/>}


     {/* -navbar-content-------- */}

     <Navbar/>

      {/* ------main-page-content---------- */}
     <div className="main-page-content">
     <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     </div>
    </div>
  )
}

export default App
