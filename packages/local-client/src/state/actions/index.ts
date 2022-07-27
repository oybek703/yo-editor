import { ActionType } from '../actionTypes'
import { CellTypes } from '../cell'

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

export interface InsertAfterCellAction extends BaseAction {
    type: ActionType.INSERT_CELL_AFTER,
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

export interface BundleStartAction {
    type: ActionType.BUNDLE_START
    payload: {
        cellId: string
    }
}

export interface BundleCompleteAction {
    type: ActionType.BUNDLE_COMPLETE
    payload: {
        cellId: string
        bundle: {
            code: string
            error: string
        }
    }
}

export type Action =
    MoveCellAction
    | DeleteCellAction
    | InsertAfterCellAction
    | UpdateCellAction
    | BundleStartAction
    | BundleCompleteAction