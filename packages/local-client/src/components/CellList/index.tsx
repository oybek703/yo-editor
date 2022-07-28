import React, { Fragment, useEffect } from 'react'
import useTypedSelector from '../../hooks/useTypedSelector'
import CellListItem from '../CellListItem'
import AddCell from '../AddCell'
import useActions from '../../hooks/useActions'

const CellList: React.FC = () => {
    const { fetchCells } = useActions()
    const cells = useTypedSelector(
        ({ cells: { order, data } }) => order.map(id => data[id]))
    useEffect(() => {
        fetchCells()
    }, [fetchCells])
    return (
        <Fragment>
            <AddCell forceVisible={cells.length === 0} beforeCellId={null}/>
            <div className='my-5'>
                {cells.map(cell => <Fragment key={cell.id}>
                    <CellListItem cell={cell} key={cell.id}/>
                    <AddCell beforeCellId={cell.id}/>
                </Fragment>)}
            </div>
        </Fragment>
    )
}

export default CellList
