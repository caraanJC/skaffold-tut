'use strict';

const express = require('express')
const app = express()

const nunjucks = require('nunjucks');
const questions1 = require('./config/questions1');
const { randomizeArray } = require('./helpers');
const questionSets = require('./config/questionSets');
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
    const randomizedQuestions = randomizeArray(questions1)

    const questionForms = randomizedQuestions.map((question, index) => {
        const randomizedAnswers = randomizeArray(question.answers)

        const answers = randomizedAnswers.map((answer) => `
            <option name="answer" value="${answer}" class="cursor-pointer">${answer.replace(/-ans/g, '')}</option>
        `)

        const questionImage = question.image ? `<img src="/assets/${question.image}">` : ''

        return `
            <form hx-post="/answer" hx-target="#result-${question.id}" hx-swap="innerHTML">
                <p class="mt-5 mb-2">${index + 1}. ${question.question}</p>
                ${questionImage}
                <div>
                    <select name="answer" multiple class="${answers.length > 4 ? 'h-40' : 'h-30'} overflow-y-auto outline-none">
                        ${answers.join("")}
                    </select>
                </div>
                <button type="submit" class="mt-2">Submit</button>
                <span id="result-${question.id}"></span>
            </form>
        `
    }).join('')

    res.render("pages/questions.html", {
        questions: questionForms,
        questionSets
    })
})

app.post('/select-question-set', (req, res) => {
    const { questionSet } = req.body
    const  questions = {
        1: questions1
    }

    const randomizedQuestions = randomizeArray(questions.hasOwnProperty(questionSet) ? questions[`${questionSet}`] : [])
        
    const questionForms = randomizedQuestions.map((question, index) => {
        const randomizedAnswers = randomizeArray(question.answers)

        const answers = randomizedAnswers.map((answer) => `
            <option name="answer" value="${answer}" class="cursor-pointer">${answer.replace(/-ans/g, '')}</option>
        `)

        return `
            <form hx-post="/answer" hx-target="#result-${question.id}" hx-swap="innerHTML">
                <p class="mt-5 mb-2">${index + 1}. ${question.question}</p>
                <div>
                    <select name="answer" multiple class="${answers.length > 4 ? 'h-40' : 'h-30'} overflow-y-auto outline-none">

                        ${answers.join("")}
                    </select>
                </div>
                <button type="submit" class="mt-2">Submit</button>
                <span id="result-${question.id}"></span>
            </form>
        `
    }).join('')

    res.status(200).send(questionForms)
})
app.post('/answer', (req, res) => {
    let response = `<span class="text-red-500">Wrong</span>`

    const { answer } = req.body

    console.log(answer)

    if (Array.isArray(answer)) {
        let isAnswerCorrect = true

        answer.forEach((ans) => {
            if (!ans.includes('-ans')) {
                isAnswerCorrect = false
            }
        })

        if (isAnswerCorrect) {
            response = `<span class="text-green-500">Correct</span>`
        }
    }
    else if (answer.includes('-ans')) {
        response = `<span class="text-green-500">Correct</span>`
    }
    res.status(200).send(response)
})

module.exports = app
