/* eslint-disable no-unused-vars */
import React from 'react'
import BlogPage from './components/BlogPage'
import BlogCards from './components/BlogCards'

const Blogs = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h2>
      </div>
      <BlogPage/>
    </div>
  )
}

export default Blogs
