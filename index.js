const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());


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
