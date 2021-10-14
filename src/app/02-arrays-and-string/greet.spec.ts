import {greet} from './greet';

describe('greet',() => {
    it('should include name in the mensaje', () => {
        expect(greet('giselle')).toContain('giselle');
    })
})
