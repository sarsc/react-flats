import React, { Component } from 'react';

import flats from '../data/flats.js';

class Flat extends Component {
  render() {
    const flatUrl = `url('${this.props.flat.imageUrl}')`;
    return (
      <div className="card" style={{ backgroundImage: flatUrl }}>
        <div className="card-category">{this.props.flat.price}</div>
        <div className="card-description">{this.props.flat.name}</div>
        <div>flat location</div>
      </div>
    );
  }
}

export default Flat;
