import { applyMiddleware, compose, createStore } from 'redux'
import { reducers } from './reducers'
import thunk from 'redux-thunk'
import { ActionType } from './actionTypes'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(thunk))
)

store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: null,
      cellType: 'code'
    }
})

export default store