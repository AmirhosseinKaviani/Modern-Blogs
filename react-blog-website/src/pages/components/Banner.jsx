import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='mx-auto px-4 py-32 bg-black'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to <span className='text-orange-500'>Amirhossein</span>'s Blog</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. we offer everything you need to ger started, from helpful tips and tutorials</p>
        <Link to='/' className='hover:text-orange-500 font-medium flex justify-center items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
      </div>
    </div>
  )
}

export default Banner
