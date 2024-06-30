const express = require("express");

const bodyParser = require("body-parser");

const cors=require('cors')

const db=require('./config/db')
const createBookRouter=require('./routes/create_books')
const app=express()
app.use(bodyParser.json());
app.use(cors());

app.use('/api',createBookRouter)
const port=process.env.PORT|| 8888;
app.listen(port,()=>{
    console.log(`Server is running on -http://localhost:${port}`);
})