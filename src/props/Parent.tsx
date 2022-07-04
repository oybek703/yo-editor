import React from 'react'
import {ChildAsFC} from './Child'

const Parent = () => {

    return (
        <>
            {/*<Child*/}
            {/*    handleClick={console.log.bind(null, 'Button clicked!')}*/}
            {/*    color="blue">*/}
            {/*    test*/}
            {/*</Child>*/}
            <ChildAsFC color="blue"
                       handleClick={console.log.bind(null, 'Click in ChildAsFC')}>
                test
            </ChildAsFC>
        </>
    )
}

export default Parent