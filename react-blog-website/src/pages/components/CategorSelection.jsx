/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const CategorSelection = ({onSelectCategory, selectedCategory, activeCategory}) => {
    const categories = ["Startups","Security","AI","Apps","Tech"]
  return (
    <div className='px-4 mb-8 space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 ml-10 lg:ml-0 font-semibold'>
      <button onClick={()=>onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "" : 
        "active-button"}`}>All</button>
      {
        categories.map((category) => (
            <button onClick={()=>onSelectCategory(category)} key={category} className= {`mr-2 space-x-16 ${activeCategory === category? "active-button" : ""}`}>{category}</button>
        ))
      }
    </div>
  )
}

export default CategorSelection
