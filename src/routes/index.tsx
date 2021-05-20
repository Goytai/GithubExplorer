import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Repository from '../pages/Repository';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repository/:repository+" component={Repository} />
    </Switch>
  );
}

export default Routes;
