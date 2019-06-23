const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/apiControllers');

//get all the tasks available


//add new task
router.post('/add/:name/:subtasks/:isCompleted', apiControllers.postAddTask);

//get a specific task
router.get('/search/:name', apiControllers.searchTask);

//update task
router.put('/update-task/:names/:name/:subtask/:isComplete', apiControllers.updateTask);

//add subtaks
router.put('/add-sub-tasks/names/name/isCompleted', apiControllers.AddSubTask);




module.exports = router;