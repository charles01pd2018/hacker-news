import React from 'react';
import axios from 'axios';

// componenets
import SearchForm from './components/search/search-form';
import List from './components/result/list';
import HeadlinePrimary from './components/headline-primary';


// states

// state helpers
import useSemiPersistentState from './states/helper/use-semi.tsx';
import storiesReducer from './states/helper/stories-reducer';

// handlers
//import { handleRemoveStory, handleSearchInput, handleSearchSubmit } from './states/handlers.'

// styles
import './scss/app.scss';


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='


let App = () => {

  // mounting the search term - change 'setSearchTerm" field to input default search term
  let [searchTerm, setSearchTerm] = useSemiPersistentState('search', '')

  // stores the url state depending on the search term
  let [url, setUrl] = React.useState( `${API_ENDPOINT}${searchTerm}` ) 

  // redeucer for filtering stories after being fetched from api
  let [stories, dispatchStories] = React.useReducer( storiesReducer, { data: [], isLoading: false, isError: false } ) 

  // fetched the stories from the API everytime the user makes a search
  let handleFetchStories = React.useCallback(async () => {

    dispatchStories({ type: 'STORIES_FETCH_INIT' })

    try {

      const result = await axios.get(url)

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      })
    } 
    
    catch {

      dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
    }
  }, [url])

  // initiates api fetch when async function handleFetchStories triggers
  React.useEffect( () => { handleFetchStories() }, [ handleFetchStories ] )

  // handles user removing stores with the 'Dismiss' button
  let handleRemoveStory = React.useCallback(item => { dispatchStories( { type: 'REMOVE_STORY', payload: item } ) } )

  // handler for storing the search term as a React state
  let handleSearchInput = event => { setSearchTerm(event.target.value) }

  // handles the user search submit
  let handleSearchSubmit = event => { 
  setUrl( `${API_ENDPOINT}${searchTerm}` ) 

  event.preventDefault() // stops the entire page from reloading
  }


  return (
    <div className='container'>

      <HeadlinePrimary headerText={'Hacker News Stories'} />

      <SearchForm searchTerm={searchTerm} onSearchInput={handleSearchInput} onSearchSubmit={handleSearchSubmit} />

      <hr />

      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? 

       ( <span>
          <p>Loading ...</p>
        </span> )

       : 

       ( <List list={stories.data} onRemoveItem={handleRemoveStory} /> )
      }
    </div>
  )
}

export default App