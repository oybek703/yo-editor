import ReactDOM from 'react-dom'
import React, {useEffect, useRef, useState} from 'react'
import * as esbuild from 'esbuild-wasm'
import {unpkgPathPlugin} from './plugins/unpkg-path-plugin'
import {fetchPlugin} from './plugins/fetch-plugin'

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
      const {outputFiles: [obj1]} = await esbuild.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(input)]
      })
      const {text: generatedCode} = obj1
      setCode(generatedCode)
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