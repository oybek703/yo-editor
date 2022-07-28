import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './state/store'
import CellList from './components/CellList'

function App() {
  return <div className='m-4 p-4'>
    <Provider store={store}>
      <div className='card'>
        <h1 className='text-center mt-1 text-success'>Realtime browser code bundler.</h1>
      </div>
      <CellList/>
    </Provider>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))
