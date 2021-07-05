import React, { useState } from 'react';

const Item = props => {
  const [item, setItem] = useState({
    name: 'Bananas',
    id: 123,
    purchased: false
  });

  const handleClick = () => {
    console.log("item: " + props.item.name);
  }

  return (
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;