import express from 'express'
import dotenv from 'dotenv'
import { connect } from 'mongoose'



const app = express()
dotenv.config()


app.get('/',(req,res)=>{
    res.send('server is active')
})


app.listen(3000,()=>{
    console.log('server is active on 3000')

    connect(process.env.MONGO_URI).then(()=>{console.log('connected to the db')})
})