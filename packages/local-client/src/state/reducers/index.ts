import {combineReducers} from 'redux'
import cells from './cellsReducers'
import bundles from './bundlesReducers'

export const reducers = combineReducers({
  cells, bundles
})

export type RootState = ReturnType<typeof reducers>

