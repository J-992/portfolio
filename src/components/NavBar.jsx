import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { useState } from 'react';

/**
 * TODO: to future Jaffer - please please PLEASE:
 * remove navigation for projects about etc 
 * bla bla bla so that it'll just pan around to 
 * different areas of the racetrack when navigating 
 * to different sections of the website but for now 
 * i'll just make it route to diff locations inspo 
 * ? "Jesses Ramen" --> https://jesse-zhou.com/ */


const NavBar = () => {

  // *refreshes the page to free up memory (bc rendering this shit takes up a ton of memory)
  // *read it makes this work better on mobile devices
  const refreshMemory = () => {
    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  return (
    <header className='header w-full'>
      <NavLink to="/"
        className="w-10 h-10 rounded-lg bg-white 
        items-center justify-center flex 
        font-bold shadow-md"
        onClick={refreshMemory}>
        <p className="text-purple-500"> JR </p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ?
          'text-blue-500' : 'text-white'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ?
          'text-blue-500' : 'text-white'}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ?
          'text-blue-500' : 'text-white'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar