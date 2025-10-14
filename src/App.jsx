import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Adventures from './pages/Adventures'
import Booking from './pages/Booking'
import BookingAccomodation from './pages/BookingAccomodation'
import FoodAndCulture from './pages/FoodAndCulture'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  

  return (
  
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path = "/adventures" element={<Adventures/>}/>
          <Route path ="/foodandculture" element={<FoodAndCulture/>}/>
          <Route path ="/booking" element={<Booking/>}/>
          <Route path ="/bookingaccomodation" element={<BookingAccomodation/>}/>
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App
