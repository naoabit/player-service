const readExtractor = require('../../../../controller/team/readExtractor');

describe('readExtractor()', () => {
    it('should return extracted team', async () => {
        const team = {
            id: 1,
            coach: 'Janine',
            year: 2002,
        };

        const extractedFixture = {
            id: 1,
            coach: 'Janine',
            year: 2002,
            players: [],
        };

        const result = readExtractor(team, []);

        expect(result).toEqual(extractedFixture);
    });
});
