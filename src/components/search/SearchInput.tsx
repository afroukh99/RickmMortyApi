import React, { useContext } from 'react';
import "./searchInput.scss";
import { FilterContext } from '../../context/FilterContext';

const SearchInput = () => {
  const { setFilterItems } = useContext(FilterContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterItems((prev) => ({
      ...prev,
      name: e.target.value
    }));
  };

  return (
    <div className='search'>
      <input onChange={handleChange} className='search__input' type="text" placeholder='Search...' />
      <img src="/images/search.png" alt="" className="search__icon" />
    </div>
  );
}

export default SearchInput;
