import * as esbuild from 'esbuild-wasm'

export const unpkgPathPlugin = () => {
    return {
        name: 'unpkg-path-plugin',
        setup (build: esbuild.PluginBuild) {
            // Load main index.ts file
            build.onResolve(
                { filter: /^(index\.js)$/ },
                (args: any) => ({ path: args.path, namespace: 'a' })
            )
            // Load relative module files
            build.onResolve(
                { filter: /^\.+\// },
                (args: any) => ({
                    namespace: 'a',
                    path: new URL(args.path,
                        `https://unpkg.com${args.resolveDir}/`).href
                }))
            // Load module main file
            build.onResolve({ filter: /.*/ }, async (args: any) => {
                return {
                    namespace: 'a',
                    path: `https://unpkg.com/${args.path}`
                }
            })
        }
    }
}
