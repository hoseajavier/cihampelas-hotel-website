import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Rooms from './components/Rooms';
import RoomDetailPage from "./components/RoomDetailPage";
import RentalCar from "./components/RentalCar";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetailPage />} />
        <Route path="/rental-cars" element={<RentalCar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
