import express, { Router, Request, Response } from 'express'
import fs from 'fs/promises'
import { join } from 'path'

interface Cell {
    id: string
    content: string
    type: 'code' | 'text'

}

const createCellsRouter = function (filename: string, dir: string) {
    const router = Router()
    router.use(express.json())
    const fullPath = join(dir, filename)
    router.route('/cells').get(async (req: Request, res: Response) => {
        try {
            const result = await fs.readFile(fullPath, { encoding: 'utf-8' })
            res.send(JSON.parse(result))
        } catch (error: any) {
            if (error.code === 'ENOENT') {
                await fs.writeFile(fullPath, '[]', 'utf-8')
                res.send('[]')
            } else {
                throw error
            }
        }
    }).post(async (req: Request, res: Response) => {
        const { cells }: { cells: Cell[] } = req.body
        await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8')
        res.send('ok')
    })
    return router
}

export default createCellsRouter
