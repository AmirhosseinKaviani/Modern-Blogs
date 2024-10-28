/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { FaBars, FaFacebook } from "react-icons/fa";
import { FaDribbble, FaTwitter } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu =()=> {
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/services", link: "services"},
        {path: "/Contact", link: "Contact"},
        {path: "/Blogs", link: "Blogs"},
        {path: "/About", link: "About"},
    ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='p-4 mx-auto max-w-7xl flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>Amirhossein</span></a>
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                navItems.map(({path,link})=>
                    <li key={path} className='text-white'>
                        <NavLink                     className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
                    </li>
                )}
            </ul>

            <div className='lg:flex gap-4 items-center hidden'>
            <a href='/' className='text-white hover:text-orange-500'><FaFacebook /></a>
            <a href='/' className='text-white hover:text-orange-500'><FaDribbble /></a>
            <a href='/' className='text-white hover:text-orange-500'><FaTwitter /></a>
            <button className='bg-orange-500 px-6 py-2 rounded font-medium hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>login</button>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                    }
                </button>
            </div>
        </nav>
        <div>
        <ul className={`md:hidden space-y-4 text-lg block bg-white px-4 py-6 mt-14 ${isMenuOpen ? "fixed top-0 right-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                navItems.map(({path,link})=>
                    <li key={path} className='text-black'>
                        <NavLink to={path}>{link}</NavLink>
                    </li>
                )}
        </ul>
        </div>
    </header>
  )
}

export default Navbar
