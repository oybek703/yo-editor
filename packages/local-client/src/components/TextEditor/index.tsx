import './textEditor.css'
import React, { useEffect, useRef, useState } from 'react'
import Meditor from '@uiw/react-md-editor'
import { Cell } from '../../state/cell'
import useActions from '../../hooks/useActions'
import ActionBar from '../ActionBar'

interface TextEditorCellProps {
    cell: Cell
}

const TextEditor: React.FC<TextEditorCellProps> = ({ cell }) => {
    const editorRef = useRef<HTMLDivElement | null>(null)
    const [editing, setEditing] = useState<boolean>(false)
    const { updateCell } = useActions()
    useEffect(() => {
        const listener = function (event: MouseEvent) {
            if (!(event.target && editorRef.current &&
                editorRef.current.contains(event.target as Node))) {
                setEditing(false)
            }
        }
        document.addEventListener('click', listener, { capture: true })
        return () => document.removeEventListener('click', listener,
            { capture: true })
    }, [])
    if (!editing) return (<div className='card card-body pb-5'>
        <ActionBar cellId={cell.id}/>
        <div title='Click to edit' className='text-editor'
             onClick={setEditing.bind(null, true)}>
            <Meditor.Markdown source={cell.content || '```# Click to edit```'}/>
        </div>
    </div>)
    return (
        <div ref={editorRef} className='text-editor card text-cell'>
            <ActionBar cellId={cell.id}/>
            <Meditor toolbarHeight={50}
                     value={cell.content}
                     onChange={value => updateCell(cell.id, value || '')}/>
        </div>
    )
}

export default TextEditor
