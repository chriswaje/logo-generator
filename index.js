const fs = require('fs');
const { prompt } = require('inquirer');
const questions = require('./utils/questions');
const allFunctions = require('./utils/functions');
const handleAnswers = allFunctions.handleAnswers;

prompt(questions)
.then(handleAnswers)
.then(function (svg) {
    console.log(svg);

    fs.writeFile('./build/logo.svg', svg, function (err) {
        if (err) return err;

        console.log('logo created');
    })
})