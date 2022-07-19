import {
  DeleteCellAction, Direction,
  InsertAfterCellAction,
  MoveCellAction,
  UpdateCellAction
} from '../actions'
import {ActionType} from '../actionTypes'
import {CellTypes} from '../cell'

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id, content
    }
  }
}

export const insertAfterCell = (id: string | null, cellType: CellTypes): InsertAfterCellAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      cellType
    }
  }
}

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id
  }
}

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id, direction
    }
  }
}