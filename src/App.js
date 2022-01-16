import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home/Home';
import About from './components/About';
import Footer from './Footer';
import Display from './components/ShowCase/Display';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/gundam' element={<Display />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
