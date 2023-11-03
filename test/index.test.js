const { Triangle, Square, Circle } = require('../renderFunctions');

describe('Render', () => {

    it('should return an svg string for a triangle logo when triangle is selected', () => {
        const shape = new Triangle('red', 'WOW', 'black');
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">WOW</text></svg>`)
    });

    it('should return an svg string for a square when square is selected', () => {
        const shape = new Square('red', 'WOW', 'black');
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="150" height="150" fill="red" />
        <text x="100" y="130" font-size="80" text-anchor="middle" fill="black">WOW</text>
        </svg>`)
    });

    it('should return an svg string for a circle when circle is selected', () => {
        const shape = new Circle('red', 'WOW', 'black');
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="red" />
        <text x="150" y="140" font-size="100" text-anchor="middle" fill="black">WOW</text>
      </svg>`)
    });
})