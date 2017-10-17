import React, { Component } from 'react';
import router from './router';
import { Link } from 'react-router-dom';

import NewUser from './components/Tavern/NewUser/NewUser';

/// router file
class App extends Component {
  render() {
    return (

      <div>
        { router }
        <NewUser />

      </div>
    );
  }
}

export default App;
