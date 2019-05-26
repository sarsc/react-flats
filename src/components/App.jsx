import React, { Component } from 'react';

import flats from '../data/flats.js';

import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatId: flats[0]
    };
  }
debugger
  render() {
    return (
      <div>
        <div className="section-left">
          <FlatList />
          <Flat id={this.state.flatId} />
        </div>
        <div className="section-right" />
      </div>
    );
  }
}

export default App;
