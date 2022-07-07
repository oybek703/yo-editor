import './resizable.css'
import React, {PropsWithChildren} from 'react'
import {ResizableBox} from 'react-resizable'

interface ResizableProps {
  direction: 'horizontal' | 'vertical'
}

const Resizable: React.FunctionComponent<PropsWithChildren<ResizableProps>> = ({direction, children}) => {
  return (
      <ResizableBox height={300}
                    maxConstraints={[Infinity, window.innerHeight * 0.9]}
                    minConstraints={[80, 80]}
                    width={Infinity}
                    resizeHandles={['s']}>
        {children}
      </ResizableBox>
  )
}

export default Resizable