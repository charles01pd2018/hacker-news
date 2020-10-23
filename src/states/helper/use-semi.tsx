// Stores the state of the user search term

import React from 'react';


let useSemiPersistentState = (key: string, initialState: string) => {

    let isMounted = React.useRef(false) // stores the current status of whether the initial searchTerm is mounted

    let [value, setValue] = React.useState( localStorage.getItem(key) || initialState )
  
    React.useEffect(() => { 
      if (!isMounted.current) isMounted.current = true

      else localStorage.setItem(key, value)
    }, [value, key] )
  
    return [value, setValue]
  }

export default useSemiPersistentState