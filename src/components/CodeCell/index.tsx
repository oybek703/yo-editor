import React, {useState} from 'react'
import Preview from '../Preview'
import CodeEditor from '../CodeEditor'
import bundle from '../../bundler'
import Resizable from '../Resizable'

function CodeCell() {
  const [code, setCode] = useState<string>('')
  const [input, setInput] = useState<string>('')

  async function handleSubmit() {
    const output = await bundle(input)
    setCode(output)
  }

  return <Resizable direction='horizontal'>
    <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
      <CodeEditor handleChange={(value => value && setInput(value))} value={input}/>
      {/*<button onClick={handleSubmit}>Submit</button>*/}
      <hr/>
      <Preview code={code}/>
    </div>
  </Resizable>
}

export default CodeCell