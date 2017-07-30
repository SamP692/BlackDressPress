import React             from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <div id="mainContainer">
    <Switch>
      <Route exact path="/" />
    </Switch>
  </div>
);
