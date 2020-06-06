const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const exphbs  = require('express-handlebars');

// Set handlebar
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: 'This is stuff'
    });
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=> console.log('server listening on port' + PORT))

