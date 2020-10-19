import React from 'react';
import InputWithLabel from './input-with-label';
import '../../scss/components/_search.scss';
import '../../scss/components/_button.scss';

 
const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
  <div className='searchForm'>
    <form onSubmit={onSearchSubmit}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <span className='button'>
        <button className='buttonLarge' classNametype="submit" disabled={!searchTerm}>
          Submit
        </button>
      </span>
      
    </form>
  </div>
);

export default SearchForm