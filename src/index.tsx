import ReactDOM from 'react-dom'
import React from 'react'
import Parent from './props/Parent'

const App = () => {
    return (
        <div>
            <h1>Hello Typescript</h1>
            <Parent/>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)