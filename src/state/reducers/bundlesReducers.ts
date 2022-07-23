import { Action } from '../actions'
import { ActionType } from '../actionTypes'
import produce from 'immer'

interface BundlesState {
    [key: string]: {
        loading: boolean
        code: string
        error: string
    } | undefined
}

const initialState: BundlesState = {}

export default produce(function bundles(state: BundlesState = initialState, action: Action): BundlesState {
    const {type, payload} = action
    switch (type) {
        case ActionType.BUNDLE_START:
            const {cellId} = payload
            state[cellId] = {
                loading: true,
                code: '',
                error: ''
            }
            return state
        case ActionType.BUNDLE_COMPLETE:
            const {cellId: bundledCellId, bundle: {code, error}} = payload
            state[bundledCellId] = {loading: false, code, error}
            return state
        default:
            return state
    }
}, initialState)