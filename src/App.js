import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from './Components/Topbar/Topbar';
import Homemain from './Components/Homemain/Homemain';
import Footer from './Components/Footer/Footer';
import Aboutus from './Pages/About/Aboutus';
import Equipmentpage from './Pages/Equipmentpage/Equipmentpage';
import Contactus from './Pages/Contactus/Contactus';

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
        <Route path="/" element={<Homemain />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Equipmentspage" element={<Equipmentpage />} />
        <Route path="/Contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </>
  );
}

export default App;
