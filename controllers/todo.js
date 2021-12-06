import userMessage from "../models/user.js";
import todoMessage from "../models/user.js";

export const getTodo = async (req,res) => {
  
  try{
     const todo = await todoMessage.find();

     console.log(todo);

     res.render('home',{
         title : 'Todo',
         todo_list : todo
     })
  }
  catch(e){
    req.session.error = 'Incorrect username or password';

    return res.redirect('/?error=' + encodeURIComponent('Incorrect_Credential'));
  }
}

export const createTodo = async(req,res) => {

    const todo = {
       description :req.body.description,
       category : req.body.category,
       dueDate: req.body.dueDate
    };

    console.log('body', req.body);
    
    const newTodo = new todoMessage(todo);
    console.log(newTodo)
    try{

        await newTodo.save();

       return res.redirect('/');
        
    }
    catch(e){
      
      return res.redirect('/?error=' + encodeURIComponent('Incorrect_Credential'));
    
    }
}

