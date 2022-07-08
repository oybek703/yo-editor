import {combineReducers} from 'redux'
import cells from './cellsReducers'

export const reducers = combineReducers({
  cells
})

export type RootState = ReturnType<typeof reducers>

