const {multiply} = require("../calculator");

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2,4);
        expect(result).toBe(8);
    });

    test("a positive and a negative number should produce a negative number", () => {
        const result = multiply(-2, 4);
        expect(result).toBe(-8);
    });

})