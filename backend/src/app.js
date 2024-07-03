'use strict';

const express = require('express')
const app = express()

const nunjucks = require('nunjucks');
const questions1 = require('./config/cloudArchitect/questions1');
const { randomizeArray } = require('./helpers');
const questionSets = require('./config/cloudArchitect/questionSets');
const questions4 = require('./config/cloudArchitect/questions4');
const store = require('store')
const { ulid } = require('ulid');
const questions5 = require('./config/cloudArchitect/questions5');
nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('public'));

const questions = {
    1: questions1,
    4: questions4,
    5: questions5
}

const createAnswersAndQuestions = (question, randomizedAnswers, index) => {
    const answers = question.isMultiple ? randomizedAnswers.map((answer) => {
        const answerId = ulid()
        return `
            <p>
                <input type="checkbox" id="${answerId}" name="answer" value="${answer}">
                <label for="${answerId}">${answer.replace(/-ans/g, '')}</label>
            </p>
        `
    }).join("") : randomizedAnswers.map((answer) => {
        const answerId = ulid()

        return `
            <p>
                <input type="radio" id="${answerId}" name="answer" value="${answer}">
                <label for="${answerId}">${answer.replace(/-ans/g, '')}</label>
            </p>
        `
    }).join("")

    const questionImage = question.image ? `<img src="/assets/${question.image}">` : ''

    return `
        <form hx-post="/answer" hx-target="#result-${question.id}" hx-swap="innerHTML" class="bg-white rounded-lg p-5 mt-5 text-gray-800">
            <p class="mb-2">${index + 1}. ${question.question}</p>
            ${questionImage}
            <div>
                ${answers}
            </div>
            <button type="submit" class="mt-2 border-2 border-black border-solid rounded-lg px-3 py-1">Submit</button>
            <span id="result-${question.id}"></span>
        </form> 
    `
}

app.get('/', (req, res) => {
    const questionSet = Number(store.get('questionSet') ?? 1)
    const randomizedQuestions = randomizeArray(questions[`${+questionSet}`])

    const questionForms = randomizedQuestions.map((question, index) => {
        const randomizedAnswers = randomizeArray(question.answers)

        return createAnswersAndQuestions(question, randomizedAnswers, index)
    }).join('')

    res.render("pages/questions.html", {
        questions: questionForms,
        questionSetOptions: questionSets.map((qSet) => {
            const isSelected = Number(qSet) === questionSet
            return `<option value="${qSet}" ${isSelected ? 'selected' : ''}>${qSet}</option>`
        })
    })
})

app.post('/select-question-set', (req, res) => {
    const { questionSet } = req.body
    store.set('questionSet', questionSet)

    const randomizedQuestions = randomizeArray(questions.hasOwnProperty(questionSet) ? questions[`${questionSet}`] : [])

    const questionForms = randomizedQuestions.map((question, index) => {
        const randomizedAnswers = randomizeArray(question.answers)

        return createAnswersAndQuestions(question, randomizedAnswers, index)
    }).join('')

    res.status(200).send(questionForms)
})
app.post('/answer', (req, res) => {
    let response = `<span class="text-red-500">Wrong</span>`

    const { answer } = req.body

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
