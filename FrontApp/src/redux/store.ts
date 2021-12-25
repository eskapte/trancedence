import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store