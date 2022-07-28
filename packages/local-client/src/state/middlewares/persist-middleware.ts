import { Dispatch } from 'react'
import { Action } from '../actions'
import { ActionType } from '../actionTypes'
import { saveCells } from '../actionCreators'
import { RootState } from '../reducers'

function persistMiddleware (store: { dispatch: Dispatch<Action>, getState: () => RootState }) {
    let timer: any
    return function (next: Dispatch<Action>) {
        return function (action: Action) {
            next(action)
            const { getState, dispatch } = store
            if ([
                ActionType.MOVE_CELL,
                ActionType.INSERT_CELL_AFTER,
                ActionType.UPDATE_CELL,
                ActionType.DELETE_CELL
            ].includes(action.type)) {
                if (timer) clearTimeout(timer)
                timer = setTimeout(function () {
                    saveCells()(dispatch, getState)
                }, 250)
            }
        }
    }
}

export default persistMiddleware
