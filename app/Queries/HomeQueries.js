const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetFaq = () => {
    return model.Faq.findAll({
        order: [["Title", "ASC"]]
    })
}

module.exports = {
    GetFaq
}