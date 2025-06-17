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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

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
