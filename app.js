const express = require('express');
const app = express();
const port = process.env.PORT || 9090;
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const homeRoute = require('./routes/homeRoute');

mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true})
    .then(()=> console.log('connected to mongodb'))
    .catch(err => console.error('not conncted to databse'));
var db = mongoose.connection;


app.use('/api', apiRoutes);

app.use(homeRoute);








app.listen(port, () => console.log(`connected on port ${port}`));