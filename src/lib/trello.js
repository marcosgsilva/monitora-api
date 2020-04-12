
require('dotenv').config({
    path: process.NODE_ENV == 'test' ? '.env.test' : '.env'
});


const createCard = async (data) => {
    let trello = require('trello-node-api')(process.env.APP_TRELLO_KEY, process.env.APP_TRELLO_TOKEN);

    return new Promise((resolve, reject) => {
        trello.card.create(data).then(function (response) {
            console.log("Docker Caiu na Data: " + new Date());

            resolve(response);
        });
    });
}


module.exports = {
    createCard
}


