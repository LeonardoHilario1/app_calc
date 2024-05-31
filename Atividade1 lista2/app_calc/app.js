const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const calculadoraRoutes = require('./routes/calculadoraRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'views')));

app.use('/', calculadoraRoutes);

module.exports = app;
