import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistStore } from "redux-persist";
import persistReducers from "./persistReducers";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// Creates saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Creates store using root reducers and applies middlewares
const store = createStore(
  persistReducers(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

// Runs all sagas
sagaMiddleware.run(rootSaga);

export { store, persistor };
