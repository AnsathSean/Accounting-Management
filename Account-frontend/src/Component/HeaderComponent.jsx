/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const HeaderComponent = () => {

  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
                    <a href='http://localhost:5173/' className='navbar-brand'>
                    Account Manager Application</a>
            </div>
            <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                <NavLink to="/list-account" className="nav-link">Account List</NavLink>
                </li>
                <li className='nav-item'>
                <NavLink to="/sort-account" className="nav-link">Sort Account</NavLink>
                </li>
                <li className='nav-item'>
                <NavLink to="/week-account" className="nav-link">Week Account</NavLink>
                </li>
                <li className='nav-item'>
                <NavLink to="/chart-account" className="nav-link">Chart Account</NavLink>
                </li>
              </ul>
            </div>
            </nav>
        </header>

    </div>
  )
}

export default HeaderComponent