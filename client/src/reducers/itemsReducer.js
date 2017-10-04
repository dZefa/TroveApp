import { combinedReducers, createStore } from 'redux';

const initialState = {
  fetchedUsers: false,
  fetchedDates: false,
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
  }
}