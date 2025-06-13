import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi' // Feather-style cart icon

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">MyApp</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'active font-bold text-blue-500' : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'active font-bold text-blue-500' : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-2xl ${isActive ? 'text-blue-500' : 'text-gray-600'}`
              }
              title="Cart"
            >
              <FiShoppingCart />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
