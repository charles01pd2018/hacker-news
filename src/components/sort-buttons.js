// Represents the sort buttons for sorting the articles

import React from 'react';

// objects
import SORTS from '../objects/sort';


let SortButtons = (handleSort) => {

    let sort_buttons = []

    for (let sortType in SORTS ) {

        console.log(sortType)
        console.log()
        sort_buttons.push(

        <span className='button'>
            <button className='buttonSmall' type='button' onClick={ () => handleSort(sortType) }>
            {sortType}
            </button>
        </span>
        )}

    return sort_buttons
}

export default SortButtons


