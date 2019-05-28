import React from 'react';

import Flat from './flat';


const FlatList = (props) => {
  return (
    props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          index={index}
          key={index}
          selectedFlat={props.selectedFlat}
          selectFlat={props.selectFlat}
        />
      );
    })
  );
};

export default FlatList;
