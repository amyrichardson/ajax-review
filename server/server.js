//bring in dependencies
const express = require('express');
const app = express();

//define middleware (routes, get/post)
app.use(express.static('server/public'));

//app.use can do both get and post (use for ALL requests)
app.get('/gifts', function(req, res){
    let gifts = ['hat', 'skates', 'mousepad'];
    res.send(gifts);
}); //end /gifts get

app.get('/santa', function(req, res){
    res.send('santa can fly!!!');
}); //end /santa get

//start the server
const port = 42424;
app.listen(port, function(){
    console.log('server running on port: ', port);
}); //end listen