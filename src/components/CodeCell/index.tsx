import React, { useEffect, useState, Fragment } from 'react'
import './codeCell.css'
import Preview from '../Preview'
import CodeEditor from '../CodeEditor'
import bundle from '../../bundler'
import Resizable from '../Resizable'
import { Cell } from '../../state/cell'
import useActions from '../../hooks/useActions'
import ActionBar from '../ActionBar'

interface CodeCellProps {
    cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    const [code, setCode] = useState<string>('')
    const [error, setError] = useState<string>('')
    const { updateCell } = useActions()
    useEffect(() => {
        let timer: any
        timer = setTimeout(async () => {
            const { code, error: bundleError } = await bundle(cell.content)
            setCode(code)
            setError(String(bundleError))
        }, 1000)
        return clearTimeout.bind(null, timer)
    }, [cell.content])
    return (
        <div className='code-cell-wrapper'>
            <Resizable direction='vertical'>
                <Fragment>
                    <ActionBar cellId={cell.id}/>
                    <div className='code-cell'>
                        <Resizable direction='horizontal'>
                            <CodeEditor handleChange={(value => value &&
                                updateCell(cell.id, value))}
                                        value={cell.content}/>
                        </Resizable>
                        <Preview code={code} error={error}/>
                    </div>
                </Fragment>
            </Resizable>
        </div>
    )
}

export default CodeCell