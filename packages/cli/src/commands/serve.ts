import { Command } from 'commander'
import {serve} from 'local-api'
import { basename, dirname, join } from 'path'
import { cwd } from 'process'

export const serveCommand = new Command().command('serve [filename]').
    description('Open file for editing').
    option('-p, --port <number>', 'port to run server on', '4005').
    action(function (filename = 'notebook.js', options: {port: string}) {
        const {port} = options
        const dir = join(cwd(), dirname(filename))
        const baseFilename = basename(filename)
        serve(parseInt(port), baseFilename, dir)
    })
