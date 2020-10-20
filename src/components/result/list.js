// Represents a compiled list of items to display

import React from 'react';

// components
import Item from './item';


let List = ({ list, onRemoveItem }) =>

  list.map(item => (
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
  ));

export default List
