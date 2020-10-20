// Stores the state of the user search term

import React from 'react';


let useSemiPersistentState = (key, initialState) => {
  
    let [value, setValue] = React.useState( localStorage.getItem(key) || initialState )
  
    React.useEffect(() => { localStorage.setItem(key, value) }, [value, key])
  
    return [value, setValue]
  }

export default useSemiPersistentState