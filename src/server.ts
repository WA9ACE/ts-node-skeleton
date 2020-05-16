import express from 'express'

const server = express()
const port: number = 3000

server.get('/', (req, res) => res.send('Hello World!'))

export default server
