// Represents a compiled list of items to display

import React from 'react';

// components
import Item from './item';
import SortButtons from '../sort-buttons';

// objects
import SORTS from '../../objects/sort';


let List = ({ list, onRemoveItem }) => {

  // stores the sort state of the articles
  let [sort, setSort] = React.useState('NONE') 

  // handler for chainging sort state of stories
  let handleSort = ( sort_key ) => { setSort(sort_key) } 

  let sortFunction = SORTS[sort]
  let sortedList = sortFunction(list)
  
  
  return ( 

    <div>

      <SortButtons handleSort={handleSort} />

      { sortedList.map(item => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} /> )) }

    </div>
  )
}

export default List
