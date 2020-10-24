// Stores the state of the user search term

import React from 'react';


let useSemiPersistentState = (key: string, initialState: string) => {
    /*
    ! NOTE ! 
    the isMounted state only adds efficiency when the useEffect function outweighs the compute power
    of checking the isMounted state each iteration.
    */

    // on first load there will be no user mounted search term
    let isMounted = React.useRef(false) 

    // sets value to search term stored in local memory - if there is no memory, sets serach term to initialState
    let [value, setValue] = React.useState( localStorage.getItem(key) || initialState )
  
    React.useEffect(() => { 
      if (!isMounted.current) isMounted.current = true // user mounts search term for the first time

      // updates local memory with new search term 
      else localStorage.setItem(key, value)
    }, [value, key] )
  
    return [value, setValue]
  }

export default useSemiPersistentState