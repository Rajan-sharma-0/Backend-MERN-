import mongoose from "mongoose"

const container = new mongoose.Schema({
    contant: {
        type: String,
        required: true,
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    },
    subTodos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo'
        }
    ]  // Array of SubTodo
}, {timestamps: true})

export const Todo = mongoose.model('Todo', container)

