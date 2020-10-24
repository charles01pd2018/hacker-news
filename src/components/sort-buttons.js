// Represents the sort buttons for sorting the articles

import React from 'react';

// objects
import SORTS from '../objects/sort';


let SortButtons = (handleSort) => {

    let sort_buttons = []

    // skipping the first 'NONE' element
    for ( let [sortType, sortFunction] of Object.entries(SORTS).slice(1) ) {
        
        // pushing sort buttons into the list
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


