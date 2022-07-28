import { Command } from 'commander'
import { serve } from '@yo-editor/local-api'
import { basename, dirname, join } from 'path'
import { cwd } from 'process'
import ErrnoException = NodeJS.ErrnoException

const isProduction = process.env.NODE_ENV === 'production'

export const serveCommand = new Command().command('serve [filename]').
    description('Open file for editing').
    option('-p, --port <number>', 'port to run server on', '4005').
    action(
        async function (filename = 'notebook.js', options: { port: string }) {
            try {
                const { port } = options
                const dir = join(cwd(), dirname(filename))
                const baseFilename = basename(filename)
                await serve(parseInt(port), baseFilename, dir, !isProduction)
                console.log(
                    `Opened ${filename}. Navigate to http://localhost:${port} to edit file.`)
            } catch (error: ErrnoException | any) {
                const { message, code } = error
                if (code === 'EADDRINUSE') console.error(
                    'Port is already in use. Try another port please.')
                else console.error('Here is the problem =>', message)
                process.exit(1)
            }
        })
