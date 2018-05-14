import * as React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import createStoreWithSaga from './reducer/creator';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import injectGlobalCss from './style/index.style';
import injectGlobalIcon from './style/icon.style';

injectGlobalCss();
injectGlobalIcon();
const Home = Loadable({
  loader: () => import('./home'),
  loading() {
    return <div>Loading...</div>;
  }
});

const RecipeDetail = Loadable({
  loader: () => import('./recipes/detail'),
  loading() {
    return <div>Loading...</div>;
  }
});

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
