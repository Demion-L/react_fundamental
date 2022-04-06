import React, { useState } from 'react';

function State() {
  const [ likes, setLikes ] = useState( 0 );
  const [ text, setText ] = useState( 'Some Text' );

  let increment = () => {
    setLikes( likes + 1 );
  };
  let decrement = () => {
    setLikes( likes - 1 );
  };

  return (
    <>
      <h1>{ text }</h1>
      <h2>{ likes }</h2>
      <input
        type="text"
        value={ text }
        onChange={ event => setText( event.target.value ) }
      />
      <button onClick={ increment }>Like</button>
      ;
      <button onClick={ decrement }>Dislike</button>;
    </>
  );
}

export default State;