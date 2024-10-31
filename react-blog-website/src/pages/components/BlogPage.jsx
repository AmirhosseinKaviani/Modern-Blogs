/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs`;
      const response = await fetch(url)
      let data = await response.json()
      setBlogs(data)
    }
    fetchBlogs()
  },[])

  return (
    <div>
      <div>Page Category</div>
      <div><BlogCards blogs={blogs}/></div>
      <div>Pagination</div>
    </div>
  )
}

export default BlogPage
