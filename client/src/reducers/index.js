import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Item from './itemsReducer';
import Dashboard from './dashboardReducers';

const TroveReducer = combineReducers({
  NavBar,
  Home,
  Item,
  Men,
  Women,
  Dashboard,
  Login,
  SearchResult,
  UserWardrobe,
  Footer,
  routing: routerReducer,
});

export default TroveReducer;
