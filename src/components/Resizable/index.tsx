import './resizable.css'
import React, {PropsWithChildren, useEffect, useState} from 'react'
import {ResizableBox, ResizableBoxProps} from 'react-resizable'

interface ResizableProps {
  direction: 'horizontal' | 'vertical'
}

const Resizable: React.FunctionComponent<PropsWithChildren<ResizableProps>> = ({direction, children}) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [width, setWidth] = useState(window.innerWidth * 0.75)
  let resizableProps: ResizableBoxProps
  if (direction === 'vertical') {
    resizableProps = {
      minConstraints: [Infinity, 24],
      maxConstraints: [Infinity, innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ['s']
    }
  } else {
    resizableProps = {
      className: 'resize-horizontal',
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      height: Infinity,
      width: width,
      resizeHandles: ['e'],
      onResizeStop: function(_, data) {
        setWidth(data.size.width)
      }
    }
  }
  useEffect(() => {
    const listener = function() {
      let timer: any
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight)
        setInnerWidth(window.innerWidth)
        if (window.innerWidth < width) {
          setWidth(window.innerWidth * 0.75)
        }
      }, 200)
    }
    window.addEventListener('resize', listener)
    return function() {
      window.removeEventListener('resize', listener)
    }
  }, [width])
  return (
      <ResizableBox {...resizableProps}>
        {children}
      </ResizableBox>
  )
}

export default Resizable