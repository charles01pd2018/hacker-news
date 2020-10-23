// Represents a compiled list of items to display

import React from 'react';

// components
import Item from './item';
import SORTS from './helper/sort';



let List = ({ list, onRemoveItem }) => {

  let [sort, setSort] = React.useState('NONE')

  let handleSort = sortKey => { setSort(sortKey) }

  let sortFunction = SORTS[sort]
  let sortedList = sortFunction(list)

  let sort_buttons = []

  console.log(SORTS)
  for (var sort_type in SORTS.keys) {
    sort_buttons.push(
      <span className='button'>
        <button className='buttonSmall' type='button' onClick={ () => handleSort(sort_type)}>
          {sort_type}
        </button>
      </span>
    )
  }
  
  console.log(sort_buttons)

  
  
  return ( 

    <div>
      {sort_buttons}
    {sortedList.map(item => (
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} /> 
    
  )) }
    </div>
  )
}

export default List
