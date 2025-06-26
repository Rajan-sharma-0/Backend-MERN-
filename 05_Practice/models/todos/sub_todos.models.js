import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema({
    contant:{
        type: String, 
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    } 
}, {timestamps: true})

export const SubTodo = mongoose.model('SubTodo', subTodoSchema)