import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDOM from 'react-dom'
import React, {useEffect, useRef, useState} from 'react'
import * as esbuild from 'esbuild-wasm'
import {unpkgPathPlugin} from './plugins/unpkg-path-plugin'
import {fetchPlugin} from './plugins/fetch-plugin'
import CodeEditor from './components/CodeEditor'

function App() {
  const ref = useRef<any>(null)
  const iframe = useRef<any>(null)
  const [input, setInput] = useState<string>('')

  async function startService() {
    await esbuild.initialize({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.14.48/esbuild.wasm',
    })
    ref.current = true
  }

  async function handleSubmit() {
    if (ref.current) {
      iframe.current.srcdoc = html
      const {outputFiles: [obj1]} = await esbuild.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      })
      const {text: generatedCode} = obj1
      iframe.current.contentWindow.postMessage(generatedCode, '*')
    }
  }

  const html = `<html><head/><body><div id="root"/></body><script>
        window.addEventListener('message', event => {
          try {
            eval(event.data)
          } catch (e) {
            const root = document.querySelector('#root')
            root.innerHTML = '<div style="color: red;"><h4>Error</h4>' + e + '</div>'
            console.error(e)
          }
        }, false)
  </script></html> `

  useEffect(() => {
    startService()
  }, [])

  return <div className='container m-1'>
    <CodeEditor handleChange={(value => value && setInput(value))} value={input}/>
    <textarea rows={8} cols={50} value={input}
              onChange={({target: {value}}) => setInput(value)}/>
    <br/>
    <button onClick={handleSubmit}>Submit</button>
    <hr/>
    <iframe title="preview" sandbox="allow-scripts" ref={iframe} srcDoc={html}/>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))