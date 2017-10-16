import React, { Component } from 'react';
import router from './router';
import { Link } from 'react-router-dom';

/// router file
class App extends Component {
  render() {
    return (

      <div>
        { router }

      </div>
    );
  }
}

export default App;
