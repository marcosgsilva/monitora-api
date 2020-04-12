const trelloModel = require('../app/model/trello-model');
const trello = require('../lib/trello');
const request = require("supertest");


const searchInfoCards = async function (req, res) {
    const trelloAuth = require('trello-node-api')(process.env.APP_TRELLO_KEY, process.env.APP_TRELLO_TOKEN);

    const infoCards = await trelloAuth.board.searchCards(process.env.BOARD_ID).then(res => res);
    return res.status(200).send({message: infoCards});
}


const createCardDocker = async (req, res) => {
    const app = require('../../src/app');

    await request(app)
        .get("/sad/lista-dockers")
        .then(data => {

            if (data.body.message.length < 16) {
                trelloModel.trelloCard.pos = process.env.TOP;
                trelloModel.trelloCard.idList = process.env.IDLIST;
                trelloModel.trelloCard.name = 'Docker do sad caiu  na Data: ' + new Date();
                trelloModel.trelloCard.desc = 'Atenção Docker acaba de cair'

                trello.createCard(trelloModel.trelloCard);
                res.status(200).send({message: "Card no docker criado."});
            }


        });

}


module.exports = {
    searchInfoCards,
    createCardDocker
}