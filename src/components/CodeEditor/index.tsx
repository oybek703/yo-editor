import './codeEditor.css'
import React, {useRef} from 'react'
import MonacoEditor, {OnChange, OnMount} from '@monaco-editor/react'
import prettier from 'prettier'
import parser from 'prettier/parser-babel'

interface CodeEditorProps {
  defaultValue?: string,
  value: string,
  handleChange: OnChange
}

const CodeEditor: React.FC<CodeEditorProps> = ({defaultValue, value, handleChange}) => {
  const monacoEditorRef = useRef<any>(null)

  function handleFormat() {
    try {
      const unFormattedCode = monacoEditorRef.current.getValue()
      const formattedCode = prettier.format(unFormattedCode, {
        parser: 'babel',
        plugins: [parser],
        useTabs: true,
        semi: false,
        singleQuote: true
      }).replace(/\n$/, '')
      monacoEditorRef.current.setValue(formattedCode)
    } catch (e) {
      const message = String(e)
      alert(message)
      console.error(e)
    }
  }

  const handleMount: OnMount = (editor) => {
    monacoEditorRef.current = editor
  }
  return (
      <div className='editor-wrapper'>
        {monacoEditorRef.current &&
        <button className='btn btn-sm btn-outline-success format-btn px-1 py-0'
                title='Format code'
                onClick={handleFormat}>
          <i className="bi bi-code-square"/>
        </button>}
        <MonacoEditor
            value={value}
            onMount={handleMount}
            defaultValue={defaultValue}
            language='javascript'
            onChange={handleChange}
            options={{
              wordWrap: 'on',
              minimap: {enabled: false},
              showUnused: true,
              folding: false,
              lineNumbersMinChars: 3,
              fontSize: 16,
              scrollBeyondLastLine: false,
              automaticLayout: true
            }}
            theme='vs-dark'
            height='100%'/>
      </div>
  )
}

export default CodeEditor