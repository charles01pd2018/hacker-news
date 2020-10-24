//  Returns object representing stories state


let storiesReducer = (state, action) => {
  /*
  ...state: 
  isLoading: loading status from api fetching
  isError: error status from api fetching
  data: stories data in list form
  */

    switch (action.type) {
      case 'STORIES_FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
  
      case 'STORIES_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        }
  
      case 'STORIES_FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        }
      
      // returns updated story list
      case 'REMOVE_STORY':
        return {
          ...state,
          // updates stories data array - filters by story ID
          data: state.data.filter(
            story => action.payload.objectID !== story.objectID
          ),
        }
  
      default:
        throw new Error()
    }
  }

export default storiesReducer