import {ActionType} from '../actionTypes'
import {CellTypes} from '../cell'

interface BaseAction {
  type: string
  payload?: any
}

export type Direction = 'up' | 'down'

export interface MoveCellAction extends BaseAction {
  type: ActionType.MOVE_CELL,
  payload: {
    id: string,
    direction: Direction
  }
}

export interface DeleteCellAction extends BaseAction {
  type: ActionType.DELETE_CELL,
  payload: string
}

export interface InsertBeforeCellAction extends BaseAction {
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: string | null
    cellType: CellTypes
  }
}

export interface UpdateCellAction extends BaseAction {
  type: ActionType.UPDATE_CELL,
  payload: {
    id: string
    content: string
  }
}

export type Action =
    MoveCellAction
    | DeleteCellAction
    | InsertBeforeCellAction
    | UpdateCellAction