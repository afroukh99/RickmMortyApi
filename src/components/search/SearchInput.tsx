import React from 'react'
import "./searchInput.scss";

const SearchInput = () => {
  return (
    <div className='search'>
        <input className='search__input' type="text" placeholder='Search...' />
        <img src="/images/search.png" alt="" className="search__icon" />
    </div>
  )
}

export default SearchInput