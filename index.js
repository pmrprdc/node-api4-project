
const express = require('express')

const server = express();

server.use(express.json())

const port = process.env.PORT  || 9000;

const initialUsers = [
    {username: "joe", password: "joe123"},
    {usernamame: "sam", passaword: "sam321"}
]


server.get('/users',(req,res)=>{
    res.json(initialUsers)
})

server.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})