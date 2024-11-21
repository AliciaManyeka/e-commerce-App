import React from 'react'

const ShopFiltering = ({filters,filtersState,setFiltersState,clearFilters}) => {
  return (
    <div className='space-y-6 p-4 bg-white rounded-lg shadow flex-shrink-0'> 
    <h3 className="text-xl font-semibold">Filters</h3>

    {/* Categories */}
    <div className='space-y-2'>
      <h4 className='font-medium text-lg'>Category</h4>
      <hr/>
      <div className='space-y-2'>
        {filters.categories.map((category) => (
          <label key={category} className='flex items-center space-x-2 cursor-pointer capitalize'>
            <input 
              type='radio'
              name='category'
              id='category'
              value={category}
              checked={filtersState.category === category}
              onChange={(e) => setFiltersState({...filtersState, category: e.target.value})}
              // className="form-radio"
            />
            <span className='ml-1 '>{category}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Colors */}
    <div className='space-y-2'>
      <h4 className='font-medium text-lg'>Colors</h4>
      <hr/>
      <div className='space-y-2'>
        {filters.colors.map((color) => (
          <label key={color} className='flex items-center space-x-2 cursor-pointer'>
            <input 
              type='radio'
              name='color'
              value={color}
              checked={filtersState.color === color}
              onChange={(e) => setFiltersState({...filtersState, color: e.target.value})}
              className="form-radio"
            />
            <span className='capitalize'>{color}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Price Ranges */}
    <div className='space-y-2'>
      <h4 className='font-medium text-lg'>Price Range</h4>
      <hr/>
      <div className='space-y-2'>
        {filters.priceRanges.map((range) => (
          <label key={range.label} className='flex items-center space-x-2 cursor-pointer'>
            <input 
              type='radio'
              name='priceRange'
              value={`${range.min}-${range.max}`}
              checked={filtersState.priceRange === `${range.min}-${range.max}`}
              onChange={(e) => setFiltersState({...filtersState, priceRange: e.target.value})}
              className="form-radio"
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Clear Filters Button */}
    <button 
      onClick={clearFilters}
      className=' bg-indigo-600 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-blue-400 to-blue-700 transition-colors flex justify-center'
    >
      Clear All Filters
    </button> 

    </div>
  )
}

export default ShopFiltering