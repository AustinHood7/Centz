import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Details from './Pages/Details';
import About from './Pages/About';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/details' element={<Details />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </>

  );
}

export default App;
