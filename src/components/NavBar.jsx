import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='bg-yellow-100 text-gray-800 shadow-md flex items-center '>
        <div className='text-2xl font-bold mr-6'> Taniti </div>
        <ul className='flex space-x-6'>
            <li>
                <Link to="/" className='hover:text-cyan-400 transition'> Home </Link>
            </li>
            <li>
                <Link to="/about" className='hover:text-cyan-400 transition'> About</Link>
            </li>
            <li> 
                <Link to="/adventures" className='hover:text-cyan-400 transition'> Adventures </Link>
            </li>
            <li>
                <Link to="/foodandculture" className='hover:text-cyan-400 transition'> Food & Culture </Link>
            </li>
            <li>
                <Link to="/booking" className='bg-cyan-400 text-white font-semibold px-4 py-2 rounded hover:bg-cyan-500 transition'> Book Trip </Link>
            </li>
        </ul>
    </nav>
  )
}
