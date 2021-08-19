import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </Switch>
  );
};
