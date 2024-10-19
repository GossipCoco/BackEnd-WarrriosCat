const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetMessageByReceiverId = (id, nav) => {
    console.log("****GetMessageByReceiverId ****", id, nav)
    return model.Message.findAll({
        offset: nav.step * nav.current,
        limit: nav.step,
        order: [["DateSend", "DESC"]],
        where: { ReceiverId: id },
        include: [{
            model: model.User,
            as: 'Sender', // Alias utilisé dans l'association
            attributes: ['Id', 'UserName', 'LastName', 'FirstName'], // Sélectionnez les champs que vous voulez inclure
        }]
    })
}
const ChangeStatusMessage = (id, status) => {    
    console.log("****ChangeStatusMessage ****", id, status)
    const promise = []
    const request = model.Message.update({ Status: status }, { where: { Id: id } })
    promise.push(request)
    return request
    .then(w => { 
        console.log("w", w)
        return Promise.all(promise)
    })
    .catch(err => { console.log("ERROR UpdateLastDateConnection : ", err) })
}
module.exports = {    
    GetMessageByReceiverId,
    ChangeStatusMessage
}