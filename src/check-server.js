const cron = require("node-cron");
const treloController = require('./app/trello-controller');

setTimeout(()=>{
    cron.schedule("* * * * *", async () => await treloController.createCardDocker());

},1000);

