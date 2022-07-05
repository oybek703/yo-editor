import ReactDOM from 'react-dom'
import React, {useEffect, useRef, useState} from 'react'
import * as esbuild from 'esbuild-wasm'

function App() {
  const ref = useRef<any>()
  const [input, setInput] = useState<string>('')
  const [code, setCode] = useState<string>('')

  async function startService() {
    await esbuild.initialize({
      worker: true,
      wasmURL: '/esbuild.wasm',
    })
    ref.current = true
  }

  async function handleSubmit() {
    if (ref.current) {
      const {code} = await esbuild.transform(input, {
        loader: 'jsx',
        target: 'es2015',
      })
      setCode(code)
    }
  }

  useEffect(() => {
    startService()
  }, [])
  return <div>
    <textarea value={input} onChange={({target: {value}}) => setInput(value)}/>
    <br/>
    <button onClick={handleSubmit}>Submit</button>
    <hr/>
    {code && <pre style={{
      maxWidth: '90vw',
      maxHeight: '90hv',
      overflowX: 'scroll',
      overflowY: 'scroll'
    }}>{code}</pre>}
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))