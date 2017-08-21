import { applyMiddleware, createStore, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { autoRehydrate } from 'redux-persist';

const logger = createLogger({ predicate: () => { return __DEV__ }});

export default configureStore = () => {
  const enhancer = applyMiddleware(
    logger
  );

  const store = createStore(
    rootReducer,
    undefined,
    compose(
      enhancer,
      autoRehydrate()
    )
  );

  // AsyncStorage.clear();
  
  return store;
};

