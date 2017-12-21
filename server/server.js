//bring in dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let gifts = ['hat', 'skates', 'mousepad'];

//define middleware (routes, get/post)
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//app.use can do both get and post (use for ALL requests)
app.get('/gifts', function(req, res){
    res.send(gifts);
}); //end /gifts get

app.post('/gifts', function(req, res){
    console.log('body: ', req.body);
    gifts.push(req.body.newGift);
    console.log('gifts array: ', gifts);
    res.sendStatus(201); //post will usually respond with a status code
    // 201 == 'Created'
}); //end /gifts post

app.get('/santa', function(req, res){
    res.send('santa can fly!!!');
}); //end /santa get

//start the server
const port = 42424;
app.listen(port, function(){
    console.log('server running on port: ', port);
}); //end listen