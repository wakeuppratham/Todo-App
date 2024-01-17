//import model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res)=>{
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});

        // send a json response
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"All data Fetched"
            }
        );

    }
    catch(err){
      console.error(err);
      res.status(500).json({
        success:false,
        error:err.message,
        message:'Server Error',
      });
    }
}

exports.getTodoById = async(req,res)=>{
    try{

        //extract todo on basis of id
        const id = req.params.id;

        const todo = await Todo.findById({_id:id})

        // given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with Given ID",
            })
        }
        // data for given id found
        res.status(200).json({
            sucess:true,
            data:todo,
            message:`Todo ${id} successfully fetched`,
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
          success:false,
          error:err.message,
          message:'Server Error',
        });
    }
}

