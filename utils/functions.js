const { Circle, Square, Triangle } = require('../renderFunctions');

module.exports = {
    handleAnswers: function (answers) {
        const { text, textColor, shape, shapeColor } = answers;
        if (shape === 'circle') {
            return new Circle(shapeColor, text, textColor).render();
        } else if (shape === 'square') {
            return new Square(shapeColor, text, textColor).render();
        } else if (shape === 'triangle') {
            return new Triangle(shapeColor, text, textColor).render();
        }
    }
}