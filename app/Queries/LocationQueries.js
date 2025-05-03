const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const functions = require('../Functions/countFunctions')

const OrderName = ['Name', 'ASC']

const countAllClans = () => {
  console.log("******* countAllClans ********");
  const promises = []
  const request = model.Clan.findAndCountAll({});
  promises.push(request)  
  return functions.countFuntion(request)
}
const countAllLocations = () => {
  console.log("******* countAllLocations ********");
  const promises = []
  const request = model.Location.findAndCountAll({});
  promises.push(request)  
  return functions.countFuntion(request)
}
const GetAllClans = (nav) => {
  console.log("**** GetClanById ****", nav)
    return model.Clan.findAll({      
      offset: nav.step * nav.current,
      limit: nav.step,
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
  const GetAllLocations = (nav) => {
    console.log("**** GetAllLocations ****", nav);
    return model.Location.findAll({      
      offset: nav.step * nav.current,
      limit: nav.step,
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
    countAllClans,
    countAllLocations,
    GetAllClans,
    GetClanById,
    GetClanByNameClan,
    GetAllLocations,
    GetLocationById
}