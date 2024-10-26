/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaDribbble, FaTwitter } from "react-icons/fa";

const Navbar = () => {
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/services", link: "services"},
        {path: "/Contact", link: "Contact"},
        {path: "/Blogs", link: "Blogs"},
        {path: "/About", link: "About"},
    ]
  return (
    <header className='bg-black'>
        <nav className='p-4'>
            <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>Amirhossein</span></a>
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                navItems.map(({path,link})=>
                    <li key={link} className='text-white'>
                        <NavLink to={path}>{link}</NavLink>
                    </li>
                )}
            </ul>

            <div className='lg:flex gap-4 items-center hidden'>
            <a href='/' className='text-white hover:text-orange-500'><FaFacebook /></a>
            <a href='/' className='text-white hover:text-orange-500'><FaDribbble /></a>
            <a href='/' className='text-white hover:text-orange-500'><FaTwitter /></a>
            <button className='bg-orange-500 px-6 py-2 rounded font-medium hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>login</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
