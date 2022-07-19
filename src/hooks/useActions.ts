import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../state/actionCreators'

const useActions = function () {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators, dispatch)
}

export default useActions