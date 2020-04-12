const request = require('supertest');
const app = require("../../src/app");

describe('List Card in the Trello', () => {
    it('List card in the Trello', async () => {
        const response = await request(app)
            .get('/trello/infocards');
        expect(response.status).toBe(200);
    });

});