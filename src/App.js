import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Savesegment from './components/Savesegment';
import Segmentpage from './components/Segmentpage';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Savesegment} />
        <Route exact path="/segmentpage" component={Segmentpage} />

      </Switch>
    </>
  )
}

export default App
