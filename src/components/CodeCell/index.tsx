import React, {useEffect, useState} from 'react'
import Preview from '../Preview'
import CodeEditor from '../CodeEditor'
import bundle from '../../bundler'
import Resizable from '../Resizable'

function CodeCell() {
  const [code, setCode] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [input, setInput] = useState<string>('')

  useEffect(() => {
    let timer: any
    timer = setTimeout(async () => {
      const {code, error: bundleError} = await bundle(input)
      setCode(code)
      setError(String(bundleError))
    }, 1000)
    return clearTimeout.bind(null, timer)
  }, [input])

  return <Resizable direction='vertical'>
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      width: '100%'
    }}>
      <Resizable direction='horizontal'>
        <CodeEditor handleChange={(value => value && setInput(value))}
                    value={input}/>
      </Resizable>
      <Preview code={code} error={error}/>
    </div>
  </Resizable>
}

export default CodeCell