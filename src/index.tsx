import ReactDOM from 'react-dom'
import React from 'react'

const App = () => {
    return (
        <h1>Hello Typescript</h1>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)