var express = require('express');
var app = express();   //require express
var port = 8080 || process.env.PORT; 
var mongoose = require('mongoose');
var db = mongoose.connection;
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(bodyParser.json()); // Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/api', appRoutes);          //set a /api route
app.use(express.static(__dirname +'/public'));

mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true});// connect to default local database

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(" we're connected to data base!");
});

app.get('*',function(req,res){       
 res.sendFile(path.join(__dirname + '/public/app/views/index.html'));

    
});


//start server 
app.listen(port,function()
{console.log("Server listening at port :" + port);
});

