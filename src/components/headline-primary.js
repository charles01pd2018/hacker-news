// Represents the title header for the web page

import React from 'react';

// styles
import '../scss/components/_headline-primary.scss';


let HeadlinePrimary = ({ header_text }) => {
    
    return (

        <div className='headlinePrimary'>

            <h1>{ header_text }</h1>

        </div>
    ) 
}

export default HeadlinePrimary