import useTypedSelector from './useTypedSelector'

const showFunc = `
    import _React from 'react'
    import _ReactDOM from 'react-dom'
    var show = value => {
        const root = document.querySelector('#root')
        if (typeof value === 'object') {
            if(value.$$typeof && value.props) {
                _ReactDOM.render(value, root)
            } else{
                root.innerHTML = JSON.stringify(value)
            }
        } else {
            root.innerHTML = value
    }
}`

const showFuncNoOp = `var show = () => {}`

const useCumulativeCode = function (cellId: string) {
    return useTypedSelector(state => {
        const {data, order} = state.cells
        const cumulativeCode = []
        const cells = order.map(id => data[id])
        for (const cellKey in cells) {
            const {type, content, id} = cells[cellKey]
            if(type === 'code') {
                if(id === cellId) {
                    cumulativeCode.push(showFunc)
                } else {
                    cumulativeCode.push(showFuncNoOp)
                }
                cumulativeCode.push(content)
            }
            if(id === cellId) break
        }
        return cumulativeCode.join('\n')
    })
}

export default useCumulativeCode