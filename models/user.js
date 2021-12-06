import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    description : {type : String, required : true},
    category : {type : String, required : true},
    dueDate : {type : String},
    createdAt : {type : Date, default : new Date()}
})

const userMessage = mongoose.model('Todo', todoSchema);
export default userMessage
