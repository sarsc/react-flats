import React from 'react';

const style = { backgroundImage: "url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg')" };

const Flat = () => {
  return (
    <div className="flat">
      <div style={style}>
        <div>flat price</div>
        <div>flat name</div>
        <div>flat location</div>
      </div>
    </div>
  );
};

export default Flat;
