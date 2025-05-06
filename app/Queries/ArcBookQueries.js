const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllArcsWithBooks = (nav) => {
    console.log("************ GetAllBooks ************", nav)
    return model.Arc.findAll({
        order: [["ArcNumber", "ASC"]],
        include:[{
            model: model.Book,
            order: [["NumberBook", "ASC"]],
        }]
    })
}
const GetAllBooks = (nav) =>{
    console.log("************ GetAllBooks ************", nav)
    return model.Book.findAll({
        offset: nav.step * nav.current,
        limit: nav.step,
        order: [["NumberBook", "ASC"]],
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
        include:[
            {
                model: model.Arc
            },{
            model: model.BookCharacter,
            include: [{
                model: model.Character
            }]
        }]
    })
}
const GetLastPublishedBook = () => {
    console.log("************ GetLastPublishedBook ************")
    return model.Book.findOne({
        limit: 1,
        order: [['PublishDate', 'DESC']],
        
        include:[{
            model: model.Arc
        }]
    })
}
const GetCurrentArc = () => {
    console.log("************ GetCurrentArc ************")
    return model.Arc.findOne({
        limit: 1,
        order: [['ArcNumber', 'DESC']],
        attributes: ['Id','Title', 'Summary','Image' ],
     })
}
const GetArcByName = (id) => {
    console.log("************ GetArcByName ************", id)
    return model.Arc.findOne({
        where: { Id: id},
        include:[
            {model: model.Book,
                include:[{
                    model: model.BookCharacter,
                    include: [{ model: model.Character }]
                }]
            }]
    })
}
module.exports = {
    GetAllArcsWithBooks,
    GetAllBooks,
    GetBookByTitle,
    GetLastPublishedBook,
    GetCurrentArc,
    GetArcByName
}