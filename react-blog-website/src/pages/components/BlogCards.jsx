import React from 'react'
import { Link } from 'react-router-dom'


const BlogCards = ({blogs}) => {
    const filteredBlogs =blogs;
    console.log(filteredBlogs)
  return (
   <div>
    {
        filteredBlogs.map((blog) => <Link key={blog.id}>
            <div>
                <img src={blog.image} alt='#' />
            </div>
        </Link>)
    }
   </div>
  )
}

export default BlogCards
