var express= require('express');
var app=express();
var todoController=require('./Controllers/todoController');

//setup template engine
app.set('view engine', 'ejs');


//static files
app.use(express.static('./public'));


//fireControllers
todoController(app);


//listen to port
app.listen(2222);
console.log('You are listening to port 2222');