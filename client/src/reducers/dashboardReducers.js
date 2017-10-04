const initialState = {
  rentedItems: [],
};

const dashboardReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_RENT_ITEMS_FULFILLED': {
      return Object.assign({}, state, {rentedItems: action.payload});
    }
    default: {
      return state;
    }
  };
};

export default dashboardReducer;