import React from 'react';
import axios from 'axios';

// componenets
import SearchForm from './components/search/search-form';
import List from './components/result/list';

// hooks
import useSemiPersistentState from './hooks/use-semi';
import storiesReducer from './hooks/stories-reducer';

// api
import './scss/app.scss'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='


const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React')

  const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`)

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  )


  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const result = await axios.get(url);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
    }
  }, [url])


  React.useEffect(() => {
    handleFetchStories()
  }, [handleFetchStories])

  
  const handleRemoveStory = item => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    })
  }


  const handleSearchInput = event => {
    setSearchTerm(event.target.value)
  }


  const handleSearchSubmit = event => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)

    event.preventDefault();
  };


  return (
    <div className='container'>

      <div className='headlinePrimary'>
        <h1>Hacker Stories</h1>
      </div>

      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      <hr />

      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? (
        <div>
          <p>Loading ...</p>
        </div>

      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  )
}

export default App;