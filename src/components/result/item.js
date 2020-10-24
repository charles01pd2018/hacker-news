// Represents an item based off the retrieved data

import React from 'react';

// styles
import '../../scss/components/_item.scss';
import '../../scss/components/_button.scss';



let Item = ({ item, onRemoveItem }) => (

    <span className='item'>

      <span className='itemLink'>
        <a href={item.url}>{item.title}</a>
      </span>

      <span className='itemAuthor'>({item.author})</span>
      <span className='itemPoints'>{item.points}</span>
      <span className='itemNumComments'>{item.num_comments}</span>

      <span className='button'>
        <button className='buttonSmall' type="button" onClick={ () => onRemoveItem(item) }>Dismiss</button>
      </span>

    </span>
  )

export default Item