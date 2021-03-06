import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeFeatureItem from './HomeFeatureItem';
import Loading from '../../components/Loading';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    return (
      <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid image-size" src={require('../../../style/YSL.jpg')} alt="First slide"></img>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid image-size" src={require('../../../style/vuitton-supreme1.jpg')} alt="Second slide"></img>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid image-size" src={require('../../../style/masthead_01-1600w.jpg')} alt="Third slide"></img>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid image-size" src={require('../../../style/prada-mens-ss18-fashion-show.jpg')} alt="Fourth slide"></img>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className='feature-section'>
        <div className='feature-section-title'>
          <span>FEATURED</span>
        </div>
        <div className='row'>
          {!items ? <Loading /> : items.map((featureItem) => {
            if(featureItem.id < 7) {
              return <HomeFeatureItem 
              featureItem={featureItem} 
              key={featureItem.id} />
            }
          }).reverse()}
        </div>
      </div>
    </div>
    );
  }
}

const homeState = (store) => {
  return {
    items: store.Item.items,
  }
}

export default connect(homeState, null)(Home);