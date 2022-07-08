import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDOM from 'react-dom'
import React from 'react'
import TextEditor from './components/TextEditor'
import {Provider} from 'react-redux'
import store from './state/store'

// import CodeCell from './components/CodeCell'

function App() {
  return <div className='m-4 p-4'>
    {/*<CodeCell/>*/}
    <Provider store={store}>
      <TextEditor/>
    </Provider>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))