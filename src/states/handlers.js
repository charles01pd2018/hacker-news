// handler functions that update React states

import React from 'react';


// handles user removing stores with the 'Dismiss' button
let handleRemoveStory = React.useCallback(item => { dispatchStories( { type: 'REMOVE_STORY', payload: item } ) } )

// handler for storing the search term as a React state
let handleSearchInput = event => { setSearchTerm(event.target.value) }

// handles the user search submit
let handleSearchSubmit = event => { 
setUrl( `${API_ENDPOINT}${searchTerm}` ) 

event.preventDefault() // stops the entire page from reloading
}

export default {

    handleRemoveStory,
    handleSearchInput,
    handleSearchSubmit
}