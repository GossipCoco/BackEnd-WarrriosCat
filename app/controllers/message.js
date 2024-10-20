const query = require('../Queries/MessageQueries')
const { handleResponse } = require("../Functions/handleResponse"); 

const Message = {}
Message.GetMessageByReceiverId = (req, res) => {
    handleResponse(res, query.GetMessageByReceiverId(req.params.id, req.body))
}
Message.ChangeStatusMessage = (req, res) => {
    const status = req.body.status; // Assurez-vous de bien récupérer `status` du corps
    if (!status) {
        return res.status(400).send({ error: "Status is required" });
    }
    handleResponse(res, query.ChangeStatusMessage(req.params.id, status))
}
module.exports = Message