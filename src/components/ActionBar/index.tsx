import React from 'react'
import './actionBar.css'
import useActions from '../../hooks/useActions'

interface ActionBarProps {
    cellId: string
}

const ActionBar: React.FC<ActionBarProps> = ({ cellId}) => {
    const { moveCell, deleteCell } = useActions()
    return (
        <div className='action-bar'>
            <button title='Move up cell' className='btn btn-sm btn-success action-btn'
                    onClick={moveCell.bind(null, cellId, 'up')}>
                <i className="bi bi-arrow-up"/>
            </button>
            <button title='Move down cell' className='btn btn-sm btn-warning action-btn'
                    onClick={moveCell.bind(null, cellId, 'down')}>
                <i className="bi bi-arrow-down"/>
            </button>
            <button title='Delete cell' className='btn btn-sm btn-danger action-btn'
                    onClick={deleteCell.bind(null, cellId)}>
                <i className="bi bi-x"/>
            </button>
        </div>
    )
}

export default ActionBar