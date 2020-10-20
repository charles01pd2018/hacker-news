// Represents the inputted search state 

import React from 'react';


let searchState = () => {

    let [searchTerm, setSearchTerm] = useSemiPersistentState('search', '')
      

  
    const handleSearchInput = event => { setSearchTerm(event.target.value) }
  
  
    const handleSearchSubmit = event => {

        setUrl(`${API_ENDPOINT}${searchTerm}`)
  
        event.preventDefault();
    }

}