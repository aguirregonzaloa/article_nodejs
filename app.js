
const express = require('express');
const app = express();
const cors = require('cors');
require('./mongodb')();


//routers
const articles = require('./router/articleRouter');
const home = require('./router/home');

//middleware
app.use(express.json());
app.use(cors());

app.use('/', home);
app.use('/api/articles/', articles);

module.exports = app;


