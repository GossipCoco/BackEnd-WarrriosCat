const jwt = require('jsonwebtoken');
const config = require("../config/db.config.js");
const query = require('../Queries/UserQueries.js')
const { handleResponse } = require('../Functions/handleResponse.js');

const User = {};
User.Login = (req, res) => {
  console.log(req.body)
  const { Email, password } = req.body;
  const Pwd = req.body.Password
  query.GetUserByEmail(Email)
    .then(user => {
      // console.log("user controller", user.Password)
      if (!user) {
        return res.status(404).send({ message: 'User Not Found.' });
      }
      if (user.Password !== req.body.Password) {
        return res.status(401).send({ message: 'Invalid Password!' });
      }
      const result = {
        usrID: user.Id,
        Email: user.Email,
        isSuccess: true,
        tocken: null,
        role: user.Role.Id,
        expire: config.JWT.expire
      }
      const token = jwt.sign({ id: user.Id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      result.tocken = token
      query.UpdateLastDateConnection(user.Id, user.Email)
      .then(response => {
        console.log(response)
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
User.GetAllUsers = (req, res) => {
    handleResponse(res, query.GetAllUsers())
}
User.GetUserById = (req, res) => {
  const id = req.params.id;
  handleResponse(res, query.GetUserById(id))
}
User.GetUserByUsername = (req, res) => {
  console.log(req.params.id)
  const id = req.params.id;
  handleResponse(res, query.GetUserByUsername(id))
}
User.GetGamerById = (req, res) => {
  const id = req.params.id
  handleResponse(res, query.GetGamerById(id))
}
User.UpdateUserInformations = (req, res) => {
    handleResponse(res, query.UpdateUserInformations(req.params.id, req.body))
}

module.exports = User