// Represents the title header for the web page

import React from 'react';

// styles
import '../scss/components/_headline-primary.scss';


let HeadlinePrimary = ({ headerText }) => {
    
    return (

        <div className='headlinePrimary'>

            <h1>{ headerText }</h1>

        </div>
    ) 
}

export default HeadlinePrimary