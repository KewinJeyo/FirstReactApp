import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Features from './pages/Features'
import Home from './pages/Home'
import Community from './pages/Community'
import Blog from './pages/Blog'
import Pricing from './pages/Pricing'


function App() {

  return (
    <>
      <BrowserRouter>
      <section className='navbar'>
        <nav>
          <h3>Nexcent</h3>
          <Link className='navtext' to="/">Home</Link> 
          <Link  className='navtext' to="/Features">Features</Link>
          <Link  className='navtext' to="/Community">Community</Link>
          <Link  className='navtext' to="/Blog">Blog</Link>
          <Link  className='navtext' to="/Pricing">Pricing</Link>
          <button>Register Now</button>
        </nav>
      </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Community" element={<Community/>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Pricing" element={<Pricing />} />
          
        </Routes>
      
      </BrowserRouter>   
    </>
  )
}

export default App