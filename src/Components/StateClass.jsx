import React from 'react';

class ClassCounter extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      count : 0,
      text : 'I LOVE YOU'
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState( { count: this.state.count + 1 } );
  }

  decrement() {
    this.setState( { count: this.state.count - 1 } );
  }

  render() {
    return (
      <div>
        <h1>{ this.state.text }</h1>
        <h2>{ this.state.count }</h2>
        <input
          type="text"
          value={ this.state.text }
          onChange={ event => this.setState( {text: event.target.value }) }
        />
        <button onClick={ this.increment }>Like</button>
        ;
        <button onClick={ this.decrement }>Dislike</button>;
      </div>
    );
  }
}

export default ClassCounter;