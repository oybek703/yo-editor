import React, {useState} from 'react'

const GuestList: React.FunctionComponent = () => {
    const [name, setName] = useState('')
    const [guests, setGuests] = useState<string[]>([])
    console.log(guests)
    function handleAddGuest() {
        setGuests([...guests, name])
        setName('')
    }

    return (
        <div>
            <h3>Guests list:</h3>
            <input type="text" placeholder='Enter name...' value={name}
                   onChange={({target: {value}}) => setName(value)}/>
            <button onClick={handleAddGuest}>Add Guest</button>
        </div>
    )
}

export default GuestList