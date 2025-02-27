import express from 'express'
import sampleRouter from './routes/sampleRouter'

const app = express()

app.use('/user', sampleRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})