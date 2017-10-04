const initialState = {
  fetchedUsers: false,
  fetchedDates: false,
  fetchedItems: false,
  items: [],
  error: null,
  owner: '',
  blockedDates: [],
}

const itemReducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_USERS_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "FETCH_USERS_FULFILLED": {
      return Object.assign({}, state, { 
        fetchedUsers: true,
        owner: action.payload
      })
    }
    case "FETCH_DATES_REJECTED": {
      return Object.assign({}, state, { 
        error: action.payload
      })
    }
    case "FETCH_DATES_FULFILLED": {
      return Object.assign({}, state, { 
        fetchedDates: true,
        blockedDates: action.payload
      })
    }
    case "FETCH_ITEMS_REJECTED": {
      return Object.assign({}, state, {
        error: action.payload
      })
    }
    case "FETCH_ITEMS_FULFILLED": {
      return Object.assign({}, state, {
        fetchedItems: true,
        items: action.payload
      })
    }
    default: {
      return state;
    }
  }
}