import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/contact" element={<ContactUs/> } />
        <Route path="/careers" element={<Careers/> } />
      </Routes>
    </div>
  );
}

export default App;
