import * as React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Home from './home';
import { Detail as RecipeDetail } from './recipes/detail';
import createStoreWithSaga from './reducer/creator';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

const store = createStoreWithSaga();

const App = () => (
  <Router history={customHistory}>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/:id" component={RecipeDetail} />
      </Switch>
    </Provider>
  </Router>
);
export default App;
