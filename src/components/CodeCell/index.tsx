import React, {useState} from 'react'
import Preview from '../Preview'
import CodeEditor from '../CodeEditor'
import bundle from '../../bundler'
import Resizable from '../Resizable'

function CodeCell() {
  const [code, setCode] = useState<string>('')
  const [input, setInput] = useState<string>('')

  // eslint-disable-next-line
  async function handleSubmit() {
    const output = await bundle(input)
    setCode(output)
  }

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
        {/*<button onClick={handleSubmit}>Submit</button>*/}
      </Resizable>
      <Preview code={code}/>
    </div>
  </Resizable>
}

export default CodeCell