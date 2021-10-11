var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');

app.use(express.static('../nodejs_form'))

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'pug')
//var router = express.Router();
var PORT = 5000;
  
app.get('/register', function(req, res){
    //(1)res.redirect('/home');
    res.sendFile(path.join(__dirname+'/registerform.html'));
});

app.post('/submit', function (req, res){
    console.log(req.body);
    res.render('postmet')
})

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});