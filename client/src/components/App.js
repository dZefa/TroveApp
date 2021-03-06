import React, { Component } from 'react';
import { HashRouter, Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Men from './Men/Men';
import Women from './Women/Women';
import Login from './Login';
import Footer from './Footer';
import Dashboard from './Dashboard/Dashboard';
import Wardrobe from './Dashboard/Wardrobe';
import firebase, {auth} from '../firebase';
import Item from './Home/Item';
import SearchResult from './Search/SearchResult';
import UserWardrobe from './UserWardrobe/UserWardrobe';

import * as cartActions from '../actions/cartActions';
import * as itemActions from '../actions/itemsAction';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.itemActions.fetchItems();
    auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user.email);
        // axios.get(`/api/user/${user.email}`)
        // .then(({data}) => {
        //   this.setState({
        //     authenticated: true,
        //     user: user,
        //     sqlUser: data,
        //     userId: data.id
        //   })
        // })
      } else {
        console.log('not logged in')
      }
    })
  }

  //Add login event
  authWithEmailPassword() {
    const email = document.getElementById('txtEmail').value;
    const pw = document.getElementById('txtPassword').value;
    const userData = null;
    const authDomain = firebase.auth();

    // auth.signInWithEmailAndPassword(email, pw)
    //   .then((result) => {
    //     console.log('logged in')
    //     axios.get(`/api/user/${email}`)
    //     .then(({data}) => {
    //       this.setState({
    //         authenticated: true,
    //         user: result,
    //         sqlUser: data
    //       })
    //     })
    //     .catch(err => console.log('error in axios: ', err.message));
    //   })
    //   .catch(err => alert(err.message));

    document.getElementById('txtEmail').value = '';
    document.getElementById('txtPassword').value = '';
  }

  // logout() {
  //   auth.signOut()
  //     .then(() => {
  //       console.log('signed out')
  //       this.setState({
  //         authenticated: false,
  //         user: null,
  //         sqlUser: null,
  //         cart: localStorage.setItem('cart', JSON.stringify([]))
  //       })
  //       console.log('state on logout: ', this.state);        
  //     })
  //     .catch(err => alert(err.message));
  // }

  //Sign up
  signUp () {
    const newName = document.getElementById('newName').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPw = document.getElementById('newPw').value;
    const confPw = document.getElementById('confPw').value;

    if (newPw === confPw) {
      // auth.createUserWithEmailAndPassword(newEmail, newPw)
      //   .then((result) => {
      //     console.log('signed up')
      //     axios.post('/api/user', {
      //       userName: newName,
      //       userEmail: newEmail
      //     })
      //     .then(({data}) => {
      //       this.setState({
      //         authenticated: true,
      //         user: result,
      //         sqlUser: data
      //       })
      //       alert('Account successfully created!')
      //     })
      //     .catch(err => alert(err.message));
      //   })
      //   .catch(err => alert(err.message));
    } else {
      alert('Please make sure both passwords match');
    }
  }

  render() {
    const { itemActions, cartActions, history } = this.props;

    return (
      <Router history={history}>
        <div>
          <div>
            <NavBar />
          </div>
          <div onClick={() => cartActions.hideCart()}>
          <Switch>
            <Route exact path='/' component={() => (
              <Home />)} />
            <Route exact path='/men' component={() => (
              <Men />)} />
            <Route exact path='/women' component={() => (
              <Women />)} />
            <Route exact path='/account' component={() => (<Dashboard history={history} />)} />
            <Route exact path='/wardrobe' component={() => (<Dashboard history={history} />)} />
            <Route exact path='/archive' component={() => (<Dashboard history={history} />)} />
            <Route exact path='/login' component={() => (<Login />)} />
            <Route exact path='/item/:item_id' component={Item} />
            <Route exact path='/search' component={() => (<SearchResult results={results} addToCart={cartActions.addToCart}/>)} />
            <Route exact path='/userwardrobe' component={() => (<UserWardrobe />)} />
            <Route render={function() {
								return (
                  <div className='fourofour-section'>
                    <p className='fourofour-status'>404</p>
                    <p className='fourofour-description'>PAGE NOT FOUND!</p>
                  </div>
                  )
							}} />
          </Switch>
          </div>
          <div onClick={() => cartActions.hideCart()}>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}


const appDispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(itemActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  };
};

export default connect(null, appDispatch)(App);