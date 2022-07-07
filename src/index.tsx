import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDOM from 'react-dom'
import React from 'react'
import TextEditor from './components/TextEditor'
// import CodeCell from './components/CodeCell'

function App() {
  return <div>
    {/*<CodeCell/>*/}
    <TextEditor/>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))