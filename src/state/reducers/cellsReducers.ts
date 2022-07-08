import {Cell} from '../cell'
import {Action} from '../actions'
import {ActionType} from '../actionTypes'

interface CellsState {
  loading: boolean
  error: string | null
  order: string[]
  data: {
    [key: string]: Cell
  }
}

const initialState: CellsState = {
  loading: true,
  error: null,
  order: [],
  data: {}
}

export default function cells(state: CellsState = initialState, action: Action): CellsState {
  const {type, payload} = action
  switch (type) {
    case ActionType.UPDATE_CELL:
      const {id, content} = payload
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {...state.data[id], content}
        }
      }
    case ActionType.MOVE_CELL:
      return state
    case ActionType.INSERT_CELL_BEFORE:
      return state
    case ActionType.DELETE_CELL:
      return state
    default: return state
  }
}