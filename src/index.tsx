import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDOM from 'react-dom'
import React from 'react'
import CodeCell from './components/CodeCell'

function App() {
  return <div className='container m-1'>
    <CodeCell/>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))