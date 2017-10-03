import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Men from '../components/Men';
import Women from '../components/Women';
import Dashboard from '../components/Dashboard';
// import Login from '../components/Login';
import SearchResult from '../components/SearchResult';
import UserWardrobe from '../components/UserWardrobe';
// import Footer from '../components/Footer';

const TroveReducer = combineReducers({
  NavBar,
  Home,
  Men,
  Women,
  Dashboard,
  // Login,
  SearchResult,
  UserWardrobe,
  // Footer,
  routing: routerReducer,
});

export default TroveReducer;
