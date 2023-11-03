module.exports = {
    handleAnswers: function (answers) {
        const { text, textColor, shape, shapeColor } = answers;
        if (shape === 'circle') {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
            <text x="150" y="140" font-size="100" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>`
        } else if (shape === 'square') {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="150" height="150" fill="${shapeColor}" />
            <text x="100" y="130" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>`
        } else if (shape === 'triangle') {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="225, 10 100, 210 350, 210" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>`
        }
    }
}