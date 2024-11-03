/* eslint-disable react/prop-types */
import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'


const BlogCards = ({blogs,currentPage, selectedCategory, pageSize}) => {
    const filteredBlogs = blogs.filter((blog) => !selectedCategory || blog.category === selectedCategory).slice((currentPage-1) * pageSize, (currentPage) * pageSize);
  return (
   <div className='lg:mx-14 mx-10 mt-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
    {
        filteredBlogs.map((blog) => <Link key={blog.id} className='shadow-lg p-4 rounded cursor-pointer'>
            <div>
                <img src={blog.image} alt='#' className='w-full'/>
            </div>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
            <p className='mb-2 flex items-center gap-3 text-gray-500'><FaUser className=''/>{blog.author}</p>
            <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
        </Link>)
    }
   </div>
  )
}

export default BlogCards
