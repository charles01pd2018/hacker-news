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

  
  return ( 
    list.map(item => (
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
  )))
}

export default List
