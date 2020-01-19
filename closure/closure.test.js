const closure = require('./closure');

describe('the closure function', () => {
    it('should return a fuction', () => {
        const result = closure();
        expect(typeof result).toBe('function');
    });
})