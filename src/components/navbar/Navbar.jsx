// Navbar.js

import Link from 'next/link'
import { Fragment } from 'react'

export default function Navbar() {
  return (
    <Fragment>
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/admin" className="text-white text-2xl font-bold">NE KART</Link>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart</Link>
                <Link href="/report" className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Report</Link>
                <Link href="/auth/login" className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                {/* Add more links as needed */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </Fragment>

  )
}
