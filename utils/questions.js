module.exports = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter text for the logo (Max of 3 characters)'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a background shape',
        choices: ['triangle', 'square', 'circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the background shape'
    },
]