
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
require('./mongodb')();


//routers
const articles = require('./router/articleRouter');
const home = require('./router/home');

//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(mongoSanitize());
app.use(xss());

app.use('/', home);
app.use('/api/articles/', articles);

module.exports = app;


