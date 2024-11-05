/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination';
import CategorSelection from './CategorSelection';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize=12
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(()=>{
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      const response = await fetch(url)
      let data = await response.json()
      setBlogs(data)
    }
    fetchBlogs()
  },[currentPage, pageSize, selectedCategory])
  const handlePageChange =(pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setActiveCategory(category)

  }

  return (
    <div>
      <div><CategorSelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/></div>
      <div><BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/></div>
      <div><Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/></div>
    </div>

  )
}

export default BlogPage
