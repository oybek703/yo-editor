import './preview.css'
import React, { useEffect, useRef } from 'react'

interface PreviewProps {
    code: string,
    title?: string,
    error: string
}

const html = `<html lang="en">
              <head>
              <title>Preview</title>
              <style>html {background-color: inherit;}</style>
              </head>
              <body><div id="root"/></body>
              <script>
                  function handleError(error) {
                    const root = document.querySelector('#root')
                    root.innerHTML = '<div style="color: red; font-family: sans-serif;"><h4>Error</h4>' + error + '</div>'
                    console.error(error)
                  }
                  window.addEventListener('error', (event) => {
                    event.preventDefault()
                    handleError(event.error)
                  })
                  window.addEventListener('message', event => {
                    try {
                      eval(event.data)
                    } catch (e) {
                        handleError(e)  
                    }
                  }, false)
                  </script>
              </html> `

const Preview: React.FC<PreviewProps> = ({ code, error }) => {
    const iframe = useRef<any>(null)
    useEffect(() => {
        iframe.current.srcdoc = html
        setTimeout(() => {
            iframe.current.contentWindow.postMessage(code, '*')
        }, 50)
    }, [code])
    return (
        <div className='preview-wrapper'>
            <iframe title="preview" sandbox="allow-scripts" ref={iframe}
                    srcDoc={html}/>
            {error && <div className='preview-error'>{error}</div>}
        </div>
    )
}

export default Preview