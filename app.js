const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();

//Connect to MongoDB stopped here ep 8 12:23
//const dbURI = 'mongodb+srv//Project123:Project1234@cluster0.emg2u.mongodb.net/Project?retryWrites=true&w=majority';
//mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => console.log('Connected to db'))
//   .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.listen(3000);


app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => 
{
    const list = [
        {title: 'Eggs'},
        {title: 'Bread'},
        {title: 'Milk'},
    ];
    res.render('index', {title: 'Home', blogs: list});
});

app.get('/about', (req, res) => 
{
   res.render('about', {title: 'About'});
});

app.get('/enter', (req, res) =>
{
    res.render('enter', {title: 'Enter'})
});

app.use((req, res) => 
{
    res.render('404', {title: '404'});
});