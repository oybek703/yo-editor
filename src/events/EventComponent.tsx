import React from 'react'

const EventComponent = () => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e)
    }

    function handleDrag(e: React.DragEvent<HTMLDivElement>) {
        console.log(e.dataTransfer)
        console.log('drag start')
    }
    return (
        <div>
            <h3>Event Component</h3>
            <input type="text" onChange={handleChange}/>
            <div draggable onDragStart={handleDrag}>Drag me.</div>
        </div>
    )
}

export default EventComponent