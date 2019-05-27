import React, { Component } from 'react';

import flats from '../data/flats.js';

import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  render() {
    return (
      <div>
        <div className="section-left flat-list">
          <FlatList flats={this.state.flats} />
        </div>
        <div className="section-right" />
      </div>
    );
  }
}

export default App;
