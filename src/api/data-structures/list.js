import React from 'react';
import { Item } from 'item.js';

export default List = ({list, onRemoveItem}) =>
  list.map(item => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem}/>);