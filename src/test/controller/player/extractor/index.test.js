const extractor = require('../../../../controller/player/extractor');

describe('extractor()', () => {
    it('should return extracted player', async () => {
        const fixture = {
            id: 1,
            number: 42,
            name: 'jojo',
            lastName: 'lhasticot',
            position: 'pas loin',
            isCaptain: false,
            teamId: 1,
            createdAt: 'lalal',
        };

        const extractedFixture = {
            id: 1,
            number: 42,
            name: 'jojo',
            lastName: 'lhasticot',
            position: 'pas loin',
            isCaptain: false,
            teamId: 1,
        };

        const result = extractor(fixture);

        expect(result).toEqual(extractedFixture);
    });
});
