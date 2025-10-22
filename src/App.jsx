import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Adventures from './pages/Adventures';
import Booking from './pages/Booking';
import BookingAccomodation from './pages/BookingAccomodation';
import FoodAndCulture from './pages/FoodAndCulture';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function RouteLayout() {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'adventures', element: <Adventures /> },
      { path: 'foodandculture', element: <FoodAndCulture /> },
      { path: 'booking', element: <Booking /> },
      { path: 'bookingaccomodation', element: <BookingAccomodation /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
