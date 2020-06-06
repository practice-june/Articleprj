const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const exphbs  = require('express-handlebars');
// const request = require('request');



// API key : pk_b21f9b78040b44bc9655b33b19e0595e 
// function callApi(){
//     request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_b21f9b78040b44bc9655b33b19e0595e', {json = true}, (err, res, body) =>{
//     if(err){return console.log(err);}
//     if(res.statusCode == 200){
//     }
// })
// }


// Set handlebar
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: 'This is stuff'
    });
});

//creat about page route
app.get('/about.html', function (req, res) {
    res.render('about');
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=> console.log('server listening on port' + PORT))

