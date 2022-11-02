const app = require('express')
const {v4} = require ('uuid')

app.get('/api',(req,res)=>{
    res.send("Hello")
})
module.exports = app