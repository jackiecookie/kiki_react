import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import { composeWithDevTools } from 'remote-redux-devtools';

export default function createStoreWithSaga() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  console.log(store.getState());
  return store;
}
