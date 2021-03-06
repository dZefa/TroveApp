import React, { Component } from 'react';
import Loading from '../../components/Loading';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class SearchResultItem extends Component {
  render() {
    return (
      <div className='col-md-3 wow fadeIn animated'>
        <Link to={{pathname: `/item/${this.props.item.id}`, params: {itemInfo: this.props.item, addToCart: this.props.addToCart}}}>
          <div className='list-section-wrap'>
            <div className='list-section-picture'>
                <img src={this.props.item.image} ></img>
            </div>
            <div className='list-info'>
              <div>
                {this.props.item.brand}
              </div>
              <div>
                {this.props.item.itemname}
              </div>
              <div>
                ${this.props.item.price}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}


export default SearchResultItem;