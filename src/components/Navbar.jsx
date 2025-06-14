import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi' // Feather-style cart icon

export default function Navbar({ cartCount }) {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">MyApp</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? 'active font-bold text-blue-500' : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'active font-bold text-blue-500' : undefined
              }
            >
              Menu
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
          <li className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-2xl ${isActive ? 'text-blue-500' : 'text-gray-600'}`
              }
              title="Cart"
            >
              <span className="relative inline-block">
                <FiShoppingCart />
                {cartCount > 0 && (
                  <span className="badge badge-primary badge-sm absolute -top-3 right-0 left-auto translate-x-1/2 z-10 shadow-md">
                    {cartCount}
                  </span>
                )}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
