import { Action, DeleteCellAction, Direction, InsertAfterCellAction, MoveCellAction, UpdateCellAction } from '../actions'
import { ActionType } from '../actionTypes'
import { CellTypes } from '../cell'
import { Dispatch } from 'react'
import bundle from '../../bundler'
import axios from 'axios'
import { RootState } from '../reducers'

export const updateCell = (id: string, content: string): UpdateCellAction => {
    return {
        type: ActionType.UPDATE_CELL,
        payload: {
            id, content
        }
    }
}

export const insertAfterCell = (
    id: string | null, cellType: CellTypes): InsertAfterCellAction => {
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

export const createBundle = (cellId: string, input: string) => {
    return async function (dispatch: Dispatch<Action>) {
        dispatch({
            type: ActionType.BUNDLE_START,
            payload: {
                cellId
            }
        })
        const { code, error } = await bundle(input)
        dispatch({
            type: ActionType.BUNDLE_COMPLETE,
            payload: {
                cellId, bundle: { code, error }
            }
        })
    }
}

export const fetchCells = () => {
    return async function (dispatch: Dispatch<Action>) {
        dispatch({
            type: ActionType.FETCH_CELLS_START
        })
        try {
            const { data } = await axios.get('/cells')
            dispatch({
                type: ActionType.FETCH_CELLS_COMPLETE,
                payload: data
            })
        } catch (e: any) {
            dispatch({
                type: ActionType.FETCH_CELLS_ERROR,
                payload: e.message
            })
        }
    }
}

export const saveCells = function () {
    return async function (
        dispatch: Dispatch<Action>, getState: () => RootState) {
        try {
            const { cells: { data, order } } = getState()
            const cells = order.map(id => data[id])
            await axios.post('/cells', { cells })
        } catch (e: any) {
            dispatch({
                type: ActionType.SAVE_CELLS_ERROR,
                payload: e.message
            })
        }
    }
}
