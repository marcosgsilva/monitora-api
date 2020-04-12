const axios = require("axios");

const listarDocker = async (req, res) => {
    const headers = {
        auth: {
            "username": process.env.APP_USERNAME,
            "password": process.env.APP_PASSWORD
        }
    };

    await axios
        .get(process.env.APP_URL, headers).then(response => {
            return res.status(200).send({message: response.data.ips});
        });
};

module.exports = {
    listarDocker
};