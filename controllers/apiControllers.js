const Todo = require('../models/apiModels');

exports.index = (req, res) => {
    Todo.get((err, todos) => {
        if (err) {
            res.json({
                status: "error",
                messsage: err,
            });
        }
        res.json({
            Task: todos
        });
    });
};

exports.postAddTask = (req, res) => {
    let todo = new Todo();
    todo.name = req.params.name;
    todo.subtaks = req.params.subtasks;
    todo.isCompleted = req.params.isCompleted;

    todo.save((err) => {
        if (err)
            res.json(err);

    res.json({
        todo: todo
         });
    });
};

exports.searchTask = (req, res) => {
    let names = req.params.name;
    Todo.find( { name: names }, (err, todo) => {
        if (err)
            res.send(err);
        res.json({
            todo: todo
        });
    });
};


//for updating
exports.updateTask = (req,res) => {
    const names = req.params.names;
    Startup.findOne({ name: names }, (err, todo) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            if(!todo) {
                res.status(404).send();
            } else {
                if(req.params.names) {
                    todo.name = req.params.name;
                    todo.subtasks = req.params.subtasks;
                    todo.isCompleted = req.params.isCompleted;
                }
                todo.save((err, todo) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send();
                    } else
                    res.json({
                        messsage: 'updated',
                        todo: todo
                    });
                });
            }
        }
        

    });
};


//for updating
exports.AddSubTask = (req,res) => {
    const names = req.params.names;
    Startup.findOne({ name: names }, (err, todo) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            if(!todo) {
                res.status(404).send();
            } else {
                if(req.params.names) {
                    todo.subtasks = {
                    name: req.params.name,
                    isCompleted: req.params.isCompleted,
                };
                }
                todo.save((err, todo) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send();
                    } else
                    res.json({
                        messsage: 'added subtaks',
                        todo: todo
                    });
                });
            }
        }
        

    });
};


