import React, { Component } from 'react';

import flats from '../data/flats';

import FlatList from './flat_list';
import FlatsMap from './flats_map';

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
        <div className="section-right map-container">
          <FlatsMap selectedFlat={this.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
