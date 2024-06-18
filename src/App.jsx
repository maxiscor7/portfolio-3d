import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Gallery3d from './pages/Gallery3d/Gallery3d';
import NavbrowserBst from './components/Navbrowser/NavbrowserBst';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className='container-all-site'>
    <Router>
      <NavbrowserBst/>

    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/gallery3d' element={<Gallery3d/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
