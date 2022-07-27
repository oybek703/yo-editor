import React from 'react'
import './addCell.css'
import useActions from '../../hooks/useActions'

interface AddCellProps {
    beforeCellId: string | null,
    forceVisible?: boolean
}

const AddCell: React.FC<AddCellProps> = ({ beforeCellId, forceVisible = false }) => {
    const { insertAfterCell } = useActions()
    return (
        <div className={`add-cell-wrapper ${forceVisible && 'force-visible'}`}>
            <button className='btn btn-info mx-5'
                    onClick={insertAfterCell.bind(null, beforeCellId, 'code')}>
                <i className="bi bi-plus-circle"/> {' '} Code
            </button>
            <button className='btn btn-info mx-5'
                    onClick={insertAfterCell.bind(null, beforeCellId, 'text')}>
                <i className="bi bi-plus-circle"/> {' '} Text
            </button>
            <div className='divider'/>
        </div>
    )
}

export default AddCell