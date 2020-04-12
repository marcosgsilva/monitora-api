const trello = require("../../src/lib/trello");

describe('Testing creatiing of card in the trello', ()=>{
    it("Craating trello", async () => {
        const dataCard = {
            name:
                'Docker do sad caiu  76575675 na Data: Sat Apr 11 2020 20:34:56 GMT-0300 (Horário Padrão de Brasília)',
            desc: 'Atenção Docker acaba de cair',
            pos: 'top',
            idList: '5e7fcb6d8d1ae15b49211ada',
            due: null,
            dueComplete: false
        };
        const createdTrello =  await trello.createCard(dataCard);
        expect(createdTrello.desc).toBe(dataCard.desc);
    });

});