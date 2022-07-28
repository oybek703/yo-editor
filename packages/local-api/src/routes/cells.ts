import express, { Router, Request, Response } from 'express'
import fs from 'fs/promises'
import { join } from 'path'

interface Cell {
    id: string
    content: string
    type: 'code' | 'text'
    }

const defaultCells = [
    {
        'id': '0.e4ngpwcl2jv',
        'content': `
            ## Yoriqulov Editor

            This is an interactive coding environment. Yuu can write Javascript, see it executed and write comprehensive documentation using markdown.
             - Click any text cell(including this one) to edit it.
             - The code in each code editor is all joined together into one file. If you define variable in cell #1, you can refer to it in any following cell.
             - You can show any React component, string, number or anything else by calling \`show\` function. This is a function is built into this environment.  Call \`show\` multiple times to show multiple values.
             - Re-order or delete cells using buttons on the top right corner.
             - Add new cell by hovering on the divider between each cell.
            
            All of your changes get saved on ther file you opened Yoriqulov Editor with. So if you run \`npx yoriqulov-editor serve tets.js\` , all of the code and text you write will bes saved on \`test.js\` file.
        `,
        'type': 'text'
    },
    {
        'id': '0.rqmgcifhgtl',
        'content': `
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={setCount.bind(null, count + 1)}>Click</button>
            <h3>Count: {count}</h3>
        </div>
    )
}

// Display any variable or React Component by calling \`show\`
show(<Counter/>)
        `,
        'type': 'code'
    }
]

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
                await fs.writeFile(fullPath, JSON.stringify(defaultCells), 'utf-8')
                res.send(JSON.stringify(defaultCells))
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
