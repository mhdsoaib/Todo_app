import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    title : {type : String, required : true},
    description : {type : String, required : true},
    category : {type : String, required : true},
    dueDate : {type : String, required : true},
    createdAt : {type : Date, default : new Date()}
})

const userMessage = mongoose.model('Todo', todoSchema);

export default userMessage