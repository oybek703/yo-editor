import React, { Fragment, useEffect } from 'react'
import './codeCell.css'
import CodeEditor from '../CodeEditor'
import Resizable from '../Resizable'
import { Cell } from '../../state/cell'
import useActions from '../../hooks/useActions'
import ActionBar from '../ActionBar'
import useTypedSelector from '../../hooks/useTypedSelector'
import Preview from '../Preview'
import useCumulativeCode from '../../hooks/useCumulativeCode'

interface CodeCellProps {
    cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    const { updateCell, createBundle } = useActions()
    const bundle = useTypedSelector(state => state.bundles[cell.id])
    const cumulativeCode = useCumulativeCode(cell.id)
    useEffect(() => {
        if (!bundle) {
            createBundle(cell.id, cumulativeCode)
            return
        }
        let timer: any
        timer = setTimeout(async () => {
            createBundle(cell.id, cumulativeCode)
        }, 1000)
        return clearTimeout.bind(null, timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cell.id, cumulativeCode, createBundle])
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
                        <div className='progress-wrapper'>
                            {!bundle || bundle.loading
                                ?
                                <progress
                                    className='progress-bar-animated progress-cover'
                                    max='100'>
                                    Loading
                                </progress>
                                : <Preview code={bundle.code}
                                           error={bundle.error}/>
                            }
                        </div>
                    </div>
                </Fragment>
            </Resizable>
        </div>
    )
}

export default CodeCell