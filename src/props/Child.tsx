import React, {PropsWithChildren} from 'react'

interface ChildProps {
    color: String
    handleClick: () => void
}

export const Child = ({color, handleClick}: ChildProps) => {
    return (
        <div>
           Hi, I am child component. COLOR: {color}
           <button onClick={handleClick}>Click</button>
        </div>
    )
}

export const ChildAsFC: React.FC<PropsWithChildren<ChildProps>> = ({color, handleClick}: ChildProps) => {
    return <div>
        {color}
        <button onClick={handleClick}>Click</button>
    </div>
}

