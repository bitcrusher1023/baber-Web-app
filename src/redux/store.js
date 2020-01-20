import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// Creates saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Creates store using root reducers and applies middlewares
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// Runs all sagas
sagaMiddleware.run(rootSaga);

export default store;
