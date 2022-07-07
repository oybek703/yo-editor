import React, {useState} from 'react'
import Preview from '../Preview'
import CodeEditor from '../CodeEditor'
import bundle from '../../bundler'

function CodeCell() {
  const [code, setCode] = useState<string>('')
  const [input, setInput] = useState<string>('')

  async function handleSubmit() {
    const output = await bundle(input)
    setCode(output)
  }

  return <div className='container m-1'>
    <CodeEditor handleChange={(value => value && setInput(value))}
                value={input}/>
    <button onClick={handleSubmit}>Submit</button>
    <hr/>
    <Preview code={code}/>
  </div>
}

export default CodeCell