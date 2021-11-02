const errorMiddleware = require('../../../middleware/error');

describe('errorMiddleware()', () => {
    it('should return error', async () => {
        const res = {
            status: jest.fn(() => ({
                send: (value) => value,
            })),
        };

        const error = {
            status: 401,
            message: 'Unauthorized',
        };
        const result = errorMiddleware(error, {}, res);

        expect(result).toEqual(error);
    });
});
