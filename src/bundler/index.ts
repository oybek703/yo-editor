import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'
import { fetchPlugin } from './plugins/fetch-plugin'

let serviceInitialized: boolean = false

async function initializeEsBuild () {
    await esbuild.initialize({
        worker: true,
        wasmURL: 'https://unpkg.com/esbuild-wasm@0.14.48/esbuild.wasm'
    })
    serviceInitialized = true
}

interface BundleResult {
    code: string
    error: string
}

async function build (rawCode: string): Promise<BundleResult> {
    try {
        const { outputFiles: [obj1] } = await esbuild.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
            jsxFactory: '_React.createElement',
            jsxFragment: '_React.Fragment'
        })
        const { text: generatedCode } = obj1
        return { code: generatedCode, error: '' }
    } catch (e: unknown) {
        return { code: '', error: String(e) }
    }
}

export default async function bundle (rawCode: string) {
    if (!serviceInitialized) await initializeEsBuild()
    return await build(rawCode)
}