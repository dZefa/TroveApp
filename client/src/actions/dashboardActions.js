import axios from 'axios';

export const fetchTrx = (userId) => {
  return function(dispatch) {
    axios.get('/api/renttrx/renter/' + userId)
      .then(({ data }) => {
        dispatch({type: "FETCH_RENT_ITEMS_FULFILLED", payload: data});
      })
      .catch(err => {
        dispatch({type: "FETCH_RENT_ITEMS_REJECTED", payload: err});
      });
  };
};