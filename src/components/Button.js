import React from 'react';

function Button(props) {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <button onClick={handleClick}>
      {props.children}
    </button>
  );
}

export default Button;