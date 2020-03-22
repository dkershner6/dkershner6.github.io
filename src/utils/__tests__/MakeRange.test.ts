import makeRange from '../MakeRange';

describe('makeRange', () => {
    it('Should make a range of numbers in an array', () => {
        const result = makeRange(1, 3);

        const expected = [1, 2, 3];

        expect(result).toEqual(expected);
    });
});
