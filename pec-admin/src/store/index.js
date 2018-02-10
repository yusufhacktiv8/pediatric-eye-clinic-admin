import { createStore, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import rootReducer from '../reducers';
import arrLogic from '../logics';

const deps = {};

const logicMiddleware = createLogicMiddleware(arrLogic, deps);

const store = createStore(rootReducer, compose(applyMiddleware(logicMiddleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// const store = createStore(rootReducer, compose(applyMiddleware(logicMiddleware)));

export default store;
