import React, { Component } from 'react';

import flats from '../data/flats.js';

// const flatUrl = `url(${flats.imageUrl})`;
const flatUrl = `url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat${this.props.id}.jpg')`;

class Flat extends Component {
  render() {
    return (
      <div className="flat">
        <div style={{ backgroundImage: flatUrl }}>
          <div>flat price</div>
          <div>flat name</div>
          <div>flat location</div>
        </div>
      </div>
    );
  }
}

export default Flat;
