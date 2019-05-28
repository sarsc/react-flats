import React, { Component } from 'react';

import flats from '../data/flats.js';

class Flat extends Component {
  handleClick = () => {
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props.index);
    }
  }

  render() {
    const flatUrl = `url('${this.props.flat.imageUrl}')`;
    return (
      <div
        className="card"
        style={{ backgroundImage: flatUrl }}
        onClick={this.handleClick}
      >
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">{this.props.flat.name}</div>
      </div>
    );
  }
}

export default Flat;
