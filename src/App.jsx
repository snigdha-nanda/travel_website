import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Favourites from './pages/Favourites';
import Hotels from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';
import About from './pages/About';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:hotelId" element={<HotelDetails />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
