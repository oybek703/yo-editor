import produce from 'immer'
import { Cell } from '../cell'
import { Action } from '../actions'
import { ActionType } from '../actionTypes'

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
    data: {},
}

function randomId () {
    return Math.random().toString(36)
}

export default produce(function cells (state: CellsState = initialState,
    action: Action): CellsState {
    const { type, payload } = action
    switch (type) {
        case ActionType.UPDATE_CELL:
            const { id, content } = payload
            state['data'][id].content = content
            return state
        case ActionType.DELETE_CELL:
            delete state['data']['id']
            state.order = state.order.filter(id => id !== payload)
            return state
        case ActionType.MOVE_CELL:
            const { id: cellId, direction } = payload
            const index = state.order.findIndex(id => cellId === id)
            const targetIndex = direction === 'up' ? index - 1 : index + 1
            if (targetIndex < 0 || targetIndex > state.order.length - 1) return state
            state.order[index] = state.order[targetIndex]
            state.order[targetIndex] = cellId
            return state
        case ActionType.INSERT_CELL_AFTER:
            const { id: insertCellId, cellType } = payload
            const cell: Cell = {
                id: randomId(),
                content: '',
                type: cellType,
            }
            state['data'][cell['id']] = cell
            const foundIndex = state.order.findIndex(id => id === insertCellId)
            if (foundIndex) state.order.push(cell.id)
            else state.order.splice(foundIndex + 1, 0, cell.id)
            return state
        default:
            return state
    }
}, initialState)