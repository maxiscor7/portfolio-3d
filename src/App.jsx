import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Gallery3d from './pages/Gallery3d/Gallery3d';
import Contact from './pages/Contact/Contact';
import Weather from './pages/Weather/Weather';
import Emc from './pages/Emc/Emc';
import Levex from './pages/Levex/Levex';
import MarianoAcosta from './pages/MarianoAcosta/MarianoAcosta';
import Law from './pages/Law/Law';
import Wolf from './pages/Wolf/Wolf';
import NavbrowserBst from './components/Navbrowser/NavbrowserBst';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Ironman3d from './pages/Ironman3d/Ironman3d';
import Keyboard from './pages/Keyboard/Keyboard';
import ReactorIronman from './pages/ReactorIronman/ReactorIronman';

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
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/emc' element={<Emc/>}/>
        <Route path='/levex' element={<Levex/>}/>
        <Route path='/mariano-acosta' element={<MarianoAcosta/>}/>
        <Route path='/real-state' element={<Law/>}/>
        <Route path='/wolf-gym' element={<Wolf/>}/>
        <Route path='/ironman3d' element={<Ironman3d/>}/>
        <Route path='/keyboard' element={<Keyboard/>}/>
        <Route path='/reactor-ironman' element={<ReactorIronman/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
