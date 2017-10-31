import React, { Component } from 'react';
import router from './router';

import videobg from './images/bg-2.mp4'

/// router file
class App extends Component {
  render() {
    return (

      <div>
        <video className="video-bg" autoPlay preload loop muted width="650" height="350">
          <source src={videobg} type="video/mp4" />
        </video>
        {router}

      </div>
    );
  }
}

export default App;
