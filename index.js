import express from 'express';
import router from './routes/user.js';
import moongoose from 'mongoose';
import bodyParser from 'body-parser';
import userMessage from './models/user.js';
import path from 'path';

const __dirname = path.resolve();

const app =express();

const PORT = 8000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())

moongoose.connect('mongodb://localhost/todo_db' , {useNewUrlParser : true, useUnifiedTopology : true}).then(() => console.log('connection to db was successfull')).catch((e) => console.log('Connection was not successfull',e))

app.use('/',router);


app.listen(PORT,(err)=>{
    if(err){
        
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${PORT}`);
});

app.get('/delete-task/', function(req, res){
    // get the id from query in the url 
    let id = req.query.id

    userMessage.findByIdAndDelete(id,function(err){
    if(err){
        console.log('error in deleting an object from database')
        return;
    }
    return res.redirect('back');
    
});
});