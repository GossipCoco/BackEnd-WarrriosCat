const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const OrderName = ['Name', 'ASC']

const GetAllClans = () => {
    return model.Clan.findAll({
      order: [OrderName]
    });
  };
  const GetClanById = (id) => {
    console.log("**** GetClanById ****", id)
    return model.Clan.findOne({
      where: { Id: id },
      include: [
        {
          model: model.Warrior,
          attributes: ['Name'],
          order: [OrderName],
          include: [
            {
              model: model.Character,
              attributes: ['Id','CurrentName', 'Image'],
            },
          ],
        },
      ],
    });
  };
  
  const GetClanByNameClan = (name) => {
    return model.Clan.findOne({
      where: { Name: { [model.Utils.Op.like]: `%${name}%` } },
      include: [
        {
          model: model.Location,
        },
        {
          model: model.Warrior,
          include: [
            {
              model: model.Character,
            },
          ],
        },
      ],
    });
  };
  const GetAllLocations = () => {
    console.log("**** GetAllLocations ****");
    return model.Location.findAll({
      order: [OrderName]
    })
  }
  const GetLocationById = (id) => {
    console.log("**** GetLocationById ****", id);
    console.log()
    return model.Location.findOne({
      where: {
         Id: { [model.Utils.Op.like]: `%${id}%` } 
      }
    })
  }
  
module.exports = {
    GetAllClans,
    GetClanById,
    GetClanByNameClan,
    GetAllLocations,
    GetLocationById
}