const request = require('supertest');
let response;
const app = require('../../src/app');
const trelloModel = require('../../src/app/model/trello-model');
const trello = require("../../src/app/trello-controller");
describe('List Docker', () => {
    it('should list docker', async () => {
        response = await request(app)
            .get("/sad/lista-dockers");


        expect(response.status).toBe(200);
    });


    it('Create trelloTest when equal 16', async () => {
        let dockers = await request(app)
            .get("/trello/create-docker");

        expect(dockers.status).toBe(200);
    });
});