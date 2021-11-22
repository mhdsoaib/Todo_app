import userMessage from "../models/user.js";
import todoMessage from "../models/user.js";

export const getTodo = async (req,res) => {
  
  try{
     const todo = await todoMessage.find();

     console.log(todo);

     res.render('home',{
         title : 'kuch nhi',
         todo_list : todo
     })
  }
  catch(e){
    res.render({message : e.message})
  }
}

export const createTodo = async(req,res) => {

    const todo = {
       title: req.body.title,
       description :req.body.description,
       category : req.body.category,
       dueDate: req.body.due
    };

    console.log('body', req.body);
    
    const newTodo = new todoMessage(todo);
    console.log(newTodo)
    try{

        await newTodo.save();

       return res.redirect('/');
        
    }
    catch(e){
        res.status(409).json({message : e.message})
    }
}