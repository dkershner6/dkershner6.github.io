import camelCaseToProperCase from '../CamelCaseToProperCase';

describe('camelCaseToProperCase', () => {
    it('Should make camel case to proper case and add spaces', () => {
        const testText = 'camelCase';

        const result = camelCaseToProperCase(testText);

        expect(result).toEqual('Camel Case');
    });
});
