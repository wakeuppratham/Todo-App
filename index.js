const express = require("express");
const app = express();

const cors = require('cors');

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

// cors setup
// Allow requests from any origin
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true, 
  }));
  


//import routes for TODO API
const todoRoutes = require("./routes/todo");

//mount the todo API routes
app.use("/api/v1",todoRoutes);


//start server

app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})

//connect to DB

const dbConnect  = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h4> This is homepage</h1>`);
})


