import React, {useEffect, useRef, useState} from 'react'

interface User {
    name: string,
    age: number
}

type UserSearchUser = User | undefined

type UserInput = HTMLInputElement | null

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Mike', age: 20},
    {name: 'Michael', age: 20},
]

const UserSearch = () => {
    const userRef = useRef<UserInput>(null)
    const [name, setName] = useState<string>('')
    const [user, setUser] = useState<UserSearchUser>()
    function handleFindUser() {
        const findUser = users.find(({name: userName}) => userName === name )
        setUser(findUser)
    }
    useEffect(() => {
        if(userRef.current) userRef.current.focus()
    }, [])
    return (
        <div>
            <h3>Find User</h3>
            <input type="text" value={name} ref={userRef}
                   onChange={({target: {value}}) => setName(value)}/>
            <button onClick={handleFindUser}>Find</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}

export default UserSearch