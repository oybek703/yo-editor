export const serve = function (port: number, filename: string, dir: string) {
    console.group('SERVE')
    console.log(`Serving server from port ${port}`)
    console.log(`Fetch cells from ${filename}`)
    console.log(`Cells file directory ${dir}`)
    console.groupEnd()
}
