import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const logger = createLogger({ predicate: () => { return __DEV__ }});

export default configureStore = () => {
  const enhancer = applyMiddleware(
    logger
  );

  return createStore(reducers, enhancer);
}