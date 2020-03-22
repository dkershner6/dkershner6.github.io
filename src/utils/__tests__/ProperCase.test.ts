import properCase from '../ProperCase';

describe('properCase', () => {
    it('Should make proper case with no spaces or mid-word CAPS', () => {
        const result = properCase('testTesttest');

        expect(result).toEqual('Testtesttest');
    });
});
