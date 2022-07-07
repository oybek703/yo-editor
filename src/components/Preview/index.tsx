import './preview.css'
import React, {useEffect, useRef} from 'react'

interface PreviewProps {
  code: string,
  title?: string
}

const html = `<html lang="en">
              <head>
              <title>Preview</title>
              <style>html{ background-color: white}</style>
              </head>
              <body><div id="root"/></body>
              <script>
                  window.addEventListener('message', event => {
                    try {
                      eval(event.data)
                    } catch (e) {
                      const root = document.querySelector('#root')
                      root.innerHTML = '<div style="color: red;"><h4>Error</h4>' + e + '</div>'
                      console.error(e)
                    }
                  }, false)
                  </script>
              </html> `

const Preview: React.FC<PreviewProps> = ({code}) => {
  const iframe = useRef<any>(null)
  useEffect(() => {
    iframe.current.srcdoc = html
    iframe.current.contentWindow.postMessage(code, '*')
  }, [code])
  return (
      <div className='preview-wrapper'>
        <iframe title="preview"
                sandbox="allow-scripts" ref={iframe} srcDoc={html}/>
      </div>
  )
}

export default Preview