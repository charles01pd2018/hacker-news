import React from 'react';
import '../../scss/components/_item.scss';
import '../../scss/components/_button.scss';



const Item = ({ item, onRemoveItem }) => (

    <div className='item'>

      <span className='itemLink'>
        <a href={item.url}>{item.title}</a>
      </span>

      <span className='itemAuthor'>({item.author})</span>
      <span className='itemNumComments'>{item.num_comments}</span>
      <span className='itemPoints'>{item.points}</span>

      <span className='button'>
        <button className='buttonSmall' type="button" onClick={() => onRemoveItem(item)}>Dismiss</button>
      </span>

    </div>
  );

export default Item