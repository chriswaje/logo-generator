module.exports = {
    handleAnswers: function (answers) {
        const { text, textColor, shape, shapeColor } = answers;
        if (shape === 'circle') {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
            <${text} x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
          </svg>`
        } else if (shape === 'square') {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="30" height="30" fill="${shapeColor}" />
            <${text} x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
            </svg>`
        } else if (shape === 'triangle') {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <svg width="100%" x="0">
            <polygon points="0 25,50 50,100 25,100 50,0 50" fill="${shapeColor}"></polygon>
        </svg>
        <svg height="200px" width="50%" x="50%">
            <polygon points="0, 50, 220, -50, 60, 0" fill="${shapeColor}"></polygon>
        </svg>
        <${text} x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">SVG</text>
            </svg>`
        }
    }
}