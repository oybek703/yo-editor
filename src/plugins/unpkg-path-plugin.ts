import * as esbuild from 'esbuild-wasm'
import axios from 'axios'
import localForage from 'localforage'

const fileCache = localForage.createInstance({name: 'fileCache'})

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({filter: /.*/}, async (args: any) => {
        console.log('onResolve', args)
        if (args.path === 'index.js') return {path: args.path, namespace: 'a'}
        if (args.path.includes('./') || args.path.includes('../')) {
          return {
            namespace: 'a',
            path: new URL(args.path,
                `https://unpkg.com${args.resolveDir}/`).href,
          }
        } else return {
          path: `https://unpkg.com/${args.path}`,
          namespace: 'a',
        }
      })

      build.onLoad({filter: /.*/, namespace: 'a'}, async (args: any) => {
        console.log('onLoad', args)

        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: `
              import React from 'react'
              import ReactDOM from 'react-dom'
              import _ from 'lodash'
              import ReactSelect from 'react-select'
              console.log(React, ReactDOM, _, ReactSelect)
            `,
          }
        }
        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path)
        if(cachedResult) return cachedResult
        const {data, request} = await axios.get(args.path)
        const result: esbuild.OnLoadResult = {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname,
        }
        await fileCache.setItem(args.path, result)
        return result
      })
    },
  }
}