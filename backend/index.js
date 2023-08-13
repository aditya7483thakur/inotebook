const express = require('express');
const cors = require('cors')
const connectToMongo = require('./db');
const userRouter = require('./routes/user');
const notesRouter = require('./routes/notes');

//Setting up connection with Database
connectToMongo;

const app = express();
const port = 5000;

//Using middleware
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{

    res.send('Hello World');
})

app.use("/api/users",userRouter);
app.use("/api/notes",notesRouter);

app.listen(port,()=>{
    console.log("Listening....")
})