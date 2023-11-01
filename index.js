require('dotenv').config();
const express = require('express')

const server = express();

server.use(express.json())

const port = process.env.PORT;

const initialUsers = [
    {username: "joe", password: "joe123"},
    {usernamame: "sam", passaword: "sam321"}
]




server.get('/users',(req,res)=>{
    res.json(initialUsers)
})


server.post('/users', (req, res) => {
    const { username, password } = req.body;
    
    // Check for missing username or password
    if (!username || !password) {
        return res.status(400).json({
            message: "Bad Request, Please provide a username and password"
        });
    } else {
        // Corrected the spelling of 'passaword' to 'password'
        initialUsers.push({ username, password });
        return res.status(201).json({
            message: `User ${username} has successfully been added`
        });
    }
});



server.use((req, res) => {
    res.status(404).json({ message: "Wrong endpoint" });
});



server.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})