import React, {useEffect, useRef, useState} from 'react'
import Meditor from '@uiw/react-md-editor'

const TextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null)
  const [editing, setEditing] = useState<boolean>(false)
  const [value, setValue] = useState<string | undefined>('')
  useEffect(() => {
    const listener = function(event: MouseEvent) {
      if(!(event.target && editorRef.current && editorRef.current.contains(event.target as Node))) {
        setEditing(false)
      }
    }
    document.addEventListener('click', listener, {capture: true})
    return () => document.removeEventListener('click', listener, {capture: true})
  }, [])
  if (!editing) return (<div onClick={setEditing.bind(null, true)}>
    <Meditor.Markdown source={'**Header**'}/>
  </div>)
  return (
      <div ref={editorRef}><Meditor value={value} onChange={setValue}/></div>
  )
}

export default TextEditor