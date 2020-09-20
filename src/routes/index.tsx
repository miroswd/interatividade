import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Interactivity from '../pages/interactivity';
import Form from '../pages/form';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Interactivity} />
      <Route path="/tweet" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
