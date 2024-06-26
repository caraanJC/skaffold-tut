'use strict';

const express = require('express')
const app = express()

const nunjucks = require('nunjucks');
const questions = require('./config/questions');
nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render("pages/home.html", {
        questions
    })
})

app.post('/answer', (req, res) => {
    let response = `<button type="submit" id="submit-{{ loop.index }}">Submit</button>`
    if (req.body.answer.includes('-ans')) {
        response = `Correct`
    }
    res.status(200).send(response)
})

module.exports = app
