import React from 'react';

const Header = (props) => {
  return (
    <header className="text-center">
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
