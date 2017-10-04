const intialState = {
  results: [],
  searching: false,
  searched: false
}

const searchReducer = (state=intialState, action) => {
  switch(action.type) {
    case 'SEARCH_PENDING': {
      return Object.assign({}, state, {searching: true});
    }

    case 'SEARCH_REJECTED': {
      return Object.assign({}, state, {searching: false, error: action.payload});
    }

    case 'SEARCH_FULFILLED': {
      return Object.assign({}, state, {
        searching: false,
        searched: true,
        results: action.payload
      }) 
    }
  }
}

export default searchReducer;