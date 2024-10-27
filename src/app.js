import express from 'express'
import router from './routes/employees.router.js'

const app = express()

//middlewares
app.use(express.json())
app.use('/api', router)
app.use((req, res, next)=>{
    res.status(404).json({msg:'Endpoint not found...!'})
})

export default app;