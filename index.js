import express from 'express';
import router from './routes/user.js';
import moongoose from 'mongoose';
import bodyParser from 'body-parser';


const app =express();
app.set('view engine', 'ejs');

app.set('views', './views')

const PORT = 8000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.json())

moongoose.connect('mongodb://localhost/codial_db' , {useNewUrlParser : true, useUnifiedTopology : true}).then(() => console.log('connection to db was successfull')).catch((e) => console.log('Connection was not successfull',e))

app.use('/',router);


app.listen(PORT,(err)=>{
    if(err){
        
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${PORT}`);
})