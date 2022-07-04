import ReactDOM from 'react-dom'
import React from 'react'
import GuestList from "./state/GuestList"
import UserSearch from "./state/UserSearch"
import EventComponent from "./events/EventComponent"

const App = () => {
    return (
        <div>
            <h1>Hello Typescript</h1>
            <GuestList/>
            <hr/>
            <UserSearch/>
            <hr/>
            <EventComponent/>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)