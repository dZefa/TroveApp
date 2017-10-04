import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Item from './itemsReducer';
import Dashboard from './dashboardReducers';
import Search from './searchReducer'

const TroveReducer = combineReducers({
  // NavBar,
  // Home,
  Item,
  Dashboard,
  // Login,
  Search,
  // UserWardrobe,
  // Footer,
  // routing: routerReducer,
});

export default TroveReducer;
