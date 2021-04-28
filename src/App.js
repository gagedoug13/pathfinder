import React, { Component } from 'react';
import Main from './components/Main'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    };
  }
  //Set initial state
  

  
  
  render() {
    console.log(this.state.nodes)
    return (
      <div>
        <Main nodes={this.state.nodes}/>
      </div>
    );
  }
};

export default App;
