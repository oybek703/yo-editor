import React from 'react'
import { Cell } from '../../state/cell'
import TextEditor from '../TextEditor'
import CodeCell from '../CodeCell'

interface CellListItemProps {
    cell: Cell
}

const CellListItem: React.FC<CellListItemProps> = ({cell}) => {
    let child: JSX.Element
    if(cell.type === 'text') {
        child = <TextEditor cell={cell}/>
    } else {
        child = <CodeCell cell={cell}/>
    }
    return (
        <div>
            {child}
        </div>
    )
}

export default CellListItem