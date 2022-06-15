import React from 'react'

interface ChildProps {
    color: String
}

export const Child = ({color}: ChildProps) => {
    return (
        <div>
           Hi, I am child component. COLOR: {color}
        </div>
    )
}

export const ChildAsFC = ({color}: ChildProps) => {
    return <div>{color}</div>
}
