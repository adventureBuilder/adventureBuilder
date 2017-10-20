import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';
// the routing for our landing page that will load a login
import Story from './components/Story/Story';
// the routing for our encounters and story challenges
import Cemetery from './components/Cemetery/Cemetery';
// the routing for our graveyard
import Tavern from './components/Tavern/Tavern';
// the routing for the tavern that loads from the login off of the landing
import StorySelection from './components/StorySelection/StorySelection';
// the routing for our story selection menu
import NewCharacter from './components/MyCharacters/NewCharacter/NewCharacter';


export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/story/:id' component={Story}/>
        <Route path='/cemetery' component={Cemetery}/>
        <Route path='/tavern' component={Tavern}/>
        <Route path='/storyselection' component={StorySelection}/>
        <Route path='/newcharacter' component={NewCharacter}/>
    </Switch>
)