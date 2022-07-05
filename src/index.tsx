import ReactDOM from 'react-dom'
import React, {useEffect, useState} from 'react'
import * as esbuild from 'esbuild-wasm'

function App() {
  const [input, setInput] = useState('')
  async function startService() {
    const service = await esbuild.initialize({
      worker: true,
      wasmURL: '/esbuild.wasm'
    })
    console.log(service)
  }
  function handleSubmit() {
    console.log(input)
  }

  useEffect(() => {
    startService()
  }, [])
  return <div>
    <textarea value={input} onChange={({target: {value}}) => setInput(value)}/>
    <br/>
    <button onClick={handleSubmit}>Submit</button>
    <pre/>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))