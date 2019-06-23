const mongoose = require('mongoose');


const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()

    },
    subtasks: [{name: String, isCompleted: Boolean}],
    isCompleted: Boolean
});



const Todo = module.exports = mongoose.model('todo', TodoSchema);

module.exports.get = function (callback, limit) {
    Todo.find(callback).limit(limit);
};