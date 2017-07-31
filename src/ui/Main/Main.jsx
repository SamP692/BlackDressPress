import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home }          from '../../uiComponents';

export default () => (
  <div id="mainContainer">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);
