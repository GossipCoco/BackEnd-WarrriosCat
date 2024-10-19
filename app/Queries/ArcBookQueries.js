const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllArcsWithBooks = (nav) => {
    console.log("************ GetAllBooks ************", nav)
    return model.Arc.findAll({
        order: [["ArcNumber", "ASC"]],
        include:[{
            model: model.Book
        }]
    })
}
const GetAllBooks = (nav) =>{
    console.log("************ GetAllBooks ************", nav)
    return model.Book.findAll({
        offset: nav.step * nav.current,
        limit: nav.step,
        include:[{
            model: model.Arc
        }]
    })
}
const GetBookByTitle = (title) =>{
    console.log("************ GetBookByTitle ************", title)
    return model.Book.findOne({
        where: {
            Title: title
        },
        include:[{
            model: model.BookCharacter,
            include: [{
                model: model.Character
            }]
        }]
    })
}
module.exports = {
    GetAllArcsWithBooks,
    GetAllBooks,
    GetBookByTitle

}