'use strict';

const express = require('express')
const app = express()

app.use(express.static('public'));
app.get('/hello', (req, res) => res.send('Hello World v2'))

module.exports = app
