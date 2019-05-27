import React from 'react';

import Flat from './flat';


const FlatList = (props) => {
  return (
    props.flats.map((flat) => {
      return <Flat flat={flat} />;
    })
  );
};

export default FlatList;
