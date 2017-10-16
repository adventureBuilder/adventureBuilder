import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
// import store from './components/store/store';
// uncomment later after adding the store
import Landing from './components/Landing/Landing';
// the routing for our landing page that will load a login
import Creation from './components/Creation/Creation';
// the routing for our character creation screen
import Story from './components/Story/Story';
// the routing for our encounters and story challenges
import Cemetary from './components/Cemetary/Cemetary';
// the routing for our graveyard
import Tavern from './components/Tavern/Tavern';
// the routing for the tavern that loads from the login off of the landing

export default (
    <Switch>
        <Route exact path='/' component={Landing}/> 
        <Route path='/tavern' component={Tavern}/>
        <Route path='/creation' component={Creation} />
        <Route path='/story' component={Story} />
        <Route path='/Cemetary' component={Cemetary} />

    </Switch>
)