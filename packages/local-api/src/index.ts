import express, { Express } from 'express'
import { dirname } from 'path'
import { createProxyMiddleware } from 'http-proxy-middleware'
import createCellsRouter from './routes/cells'

export const serve = function (
    port: number, filename: string, dir: string, useProxy: boolean) {
    const app: Express = express()

    app.use(createCellsRouter(filename, dir))

    if (useProxy) {
        app.use(createProxyMiddleware({
            target: 'http://localhost:3001',
            ws: true,
            logLevel: 'silent'
        }))
    } else {
        const packagePath = require.resolve('@oybek703/local-client/build/index.html')
        app.use(express.static(dirname(packagePath)))
    }

    return new Promise<void>((resolve, reject) => {
        app.listen(port, resolve).on('error', reject)
    })
}
