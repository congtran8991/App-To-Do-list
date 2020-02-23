var express = require('express');
var app = express();
var body_parser = require('body-parser');
var mongoose = require('mongoose');
var workList = require('./Api/workList')
var account = require('./Api/account');
var checkToken = require('./Api/checkToken');

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.use('/Api/account', account);
app.use('/Api/workList', workList);

// app.use('/Api/cart', cart);
// app.use('/Api/registration', registration);
app.listen(3333);
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/workList", { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))