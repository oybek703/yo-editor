import * as esbuild from 'esbuild-wasm'
import {unpkgPathPlugin} from './plugins/unpkg-path-plugin'
import {fetchPlugin} from './plugins/fetch-plugin'

let serviceInitialized: boolean = false

async function initializeEsBuild() {
  await esbuild.initialize({
    worker: true,
    wasmURL: 'https://unpkg.com/esbuild-wasm@0.14.48/esbuild.wasm'
  })
  serviceInitialized = true
}

async function build(rawCode: string) {
  try {
    const {outputFiles: [obj1]} = await esbuild.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)]
    })
    const {text: generatedCode} = obj1
    return {code: generatedCode, error: ''}
  } catch (e) {
    return {code: '', error: e}
  }
}

export default async function bundle(rawCode: string) {
  if (!serviceInitialized) await initializeEsBuild()
  return await build(rawCode)
}