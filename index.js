var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors');

const port = process.env.PORT || 8000;
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(8000, function(){
    console.log("APP IS RUNNING ON PORT " + 8000);
})