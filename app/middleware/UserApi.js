const jwt = require('jsonwebtoken');

const queries = require('../Queries/UserQueries');

const UserApi = {};

UserApi.SetJWT = async (userData) => {
  try {
    const user = await queries.GetUserByEmail(userData.email);
    if (!user) {
      throw new Error('User Not Found.');
    }
    if (user.password !== userData.password) {
      throw new Error('Invalid Password!');
    }
    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });
    console.log({ id: user.id, email: user.email, token: token })
    return { id: user.Id, email: user.Email, token: token };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = UserApi;
