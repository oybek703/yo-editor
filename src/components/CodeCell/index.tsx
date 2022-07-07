import React, {useEffect, useState} from 'react'
import Preview from '../Preview'
import CodeEditor from '../CodeEditor'
import bundle from '../../bundler'
import Resizable from '../Resizable'

function CodeCell() {
  const [code, setCode] = useState<string>('')
  const [input, setInput] = useState<string>('')

  useEffect(() => {
    let timer: any
    timer = setTimeout(async () => {
      const output = await bundle(input)
      setCode(output)
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
      <Preview code={code}/>
    </div>
  </Resizable>
}

export default CodeCell