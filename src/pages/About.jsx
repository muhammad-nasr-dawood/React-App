import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div className="flex p-6">
      <aside className="w-48 pr-4 border-r">
        <h2 className="text-lg font-semibold mb-4">Sections</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="company"
            className={({ isActive }) =>
              `px-2 py-1 rounded hover:bg-blue-100 ${
                isActive ? 'bg-blue-200 font-semibold text-blue-700' : ''
              }`
            }
          >
            Company
          </NavLink>
          <NavLink
            to="people"
            className={({ isActive }) =>
              `px-2 py-1 rounded hover:bg-blue-100 ${
                isActive ? 'bg-blue-200 font-semibold text-blue-700' : ''
              }`
            }
          >
            People
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 pl-6">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <Outlet />
      </main>
    </div>
  )
}
