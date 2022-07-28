import { applyMiddleware, compose, createStore } from 'redux'
import { reducers } from './reducers'
import thunk from 'redux-thunk'
import persistMiddleware from './middlewares/persist-middleware'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(thunk, persistMiddleware))
)

export default store
