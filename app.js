
 import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import cloudRouter from './api/routers/Cloude.js'
const app = express()
const port = 3001
app.use(bodyParser.json())


app.use(cors())
 app.use('', cloudRouter)

app.listen(port, () => {
    console.log(`my application is listening on http://localhost:${port}`);
})