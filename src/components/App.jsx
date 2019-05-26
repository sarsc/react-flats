import React, { Component } from 'react';

import Flat from './flat.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="section-left">
          <Flat />
        </div>
        <div className="section-right" />
      </div>
    );
  }
}

export default App;
