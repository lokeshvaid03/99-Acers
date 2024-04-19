import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="bg-white-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-8 w-auto mr-4" />
        <div className="relative">
        </div>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-gray-300 hover:text-gray-100 px-3">For Buyers</a>
        <a href="#" className="text-gray-300 hover:text-gray-100 px-3">For Tenants</a>
        <a href="#" className="text-gray-300 hover:text-gray-100 px-3">For Owners</a>
        <a href="#" className="text-gray-300 hover:text-gray-100 px-3">For Dealers/Builders</a>
        <a href="#" className="text-gray-300 hover:text-gray-100 px-3">Insights</a>
        <a href="#" className="text-gray-300 hover:text-gray-100 px-3">Sell/Rent Property</a>
      </div>
    </nav>
  )
}

export default Navbar