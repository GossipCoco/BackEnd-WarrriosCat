// dataHelpers.js
async function countEntities(model, where = {}) {
  const { count } = await model.findAndCountAll({ where, attributes: ['Id'] });
  return count;
}

async function fetchEntities(model, { where = {}, offset = 0, limit = 10, order = [] } = {}) {
  return model.findAll({ where, offset, limit, order });
}

module.exports = { countEntities, fetchEntities };
