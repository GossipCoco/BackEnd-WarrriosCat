const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const functions = require('../Functions/countFunctions')

const WhereByUser =  { model: model.User, attributes: ['Id', 'UserName']}
const modelChapter = { model: model.Chapter }

const countAllMyFictions = (usr) => {
  console.log("************ countAllMyFictions********* ", usr);
  const promises = []
  const request = model.Fiction.findAndCountAll({
    where: { UserId:usr },
  });
  promises.push(request)
  return functions.countFuntion(request)
};
const countAllFictionsOnBases = () => {
  console.log("******* countAllFictionsOnBases ********");
  const promises = []
  const request = model.Fiction.findAndCountAll({});
  promises.push(request)  
  return functions.countFuntion(request)
}

const CountTotalWordBuUser = (usr) => {
  console.log("**** CountTotalWordsByUser ****", usr);
  return model.Chapter.findAll({
    attributes: [
      'FictionId',
      [model.Sequelize.fn('SUM', Sequelize.col('NbWords')), 'total_words']
    ],
    include: [{
      model: model.Fiction,
      include: [{
        model: model.Game,
        include: [{
          model: model.UserGame,
          where: { UserId: usr }
        }]
      }]
    }],
    group: ['Chapter.FictionId'], // Assure-toi que le groupement est correct
    raw: true
  });
}
const CountTotalWordByUserV2 = (usr) => {
  console.log("**** CountTotalWordsByUserV2 ****", usr);
  return model.Game.findAll({
    include: [{
      model: model.Fiction,
      where: { UserId: usr },
      attributes: ['Id'],
      include: [{
        model: model.Chapter,
        attributes: ['NbWords'],
        group: ['Chapter.FictionId'],
        raw: true
      }]
    }]
  });
};

const GetAllFictionsOnBase = (nav) => {  
  console.log("**** GetAllFictionsOnBase ****",nav);
  return model.Fiction.findAll({    
    order: [["Title", "ASC"]],
    offset: nav.step * nav.current,
    limit: nav.step,
    include: [
      { model: model.Comments },
      WhereByUser,
      { model: model.FictionIllustration },
      modelChapter,      
      { model: model.Game,
        include: [
          { model: model.GameCharacter,
            attributes: ['Id'],
            include: [ { model: model.Character,
                attributes: ['Id', 'CurrentName', 'Image'],
                include: [ { model: model.Grade },
                  { model: model.Warrior,
                    include: [{ model: model.Clan }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
}
const GetAllFictionsByUser = (usr, nav) => {  
  console.log("********  GetAllFictionsByUser ********", usr, nav);
  return model.Fiction.findAll({
    where: { UserId:usr },
    order: [["Title", "ASC"]],
    offset: nav.step * nav.current,
    limit: nav.step,
    include: [
      WhereByUser,
      { model: model.Comments },
      { model: model.FictionIllustration },
      modelChapter,      
      { model: model.Game,
        include: [
          { model: model.GameCharacter,
            attributes: ['Id'],
            include: [ { model: model.Character,
                attributes: ['Id', 'CurrentName', 'Image'],
                include: [ { model: model.Grade },
                  {model: model.Warrior,
                    include: [{ model: model.Clan }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
}
const GetAllFictionsByName = (name, nav) => {
  console.log("**** GetTheFictionByName ****", name, nav);
  console.log(name, nav)
  return model.Fiction.findOne({
    order: [["Title", "ASC"]],
    where: {
      Title: { [model.Utils.Op.like]: `%${name}%` },
    },
    include:[ { model: model.Comments}],
    include: [      
      {
        model: model.User,
        attributes: ['Id', 'UserName']
      },
      { model: model.FictionIllustration },
      modelChapter,      
      {
        model: model.Game,
        include: [          
          {
            model: model.GameCharacter,
            attributes: ['Id'],
            include: [
              {
                model: model.Character,
                attributes: ['Id', 'CurrentName', 'Image'],
                include: [
                  { model: model.Grade },
                  {
                    model: model.Warrior,
                    include: [{ model: model.Clan }],
                  },
                ],
              },
            ],
          },
          {
            model: model.GameGamer,
            include: [{
              model: model.Gamer
            }]
          }
        ],
      },      
     
    ],
  });
};


const GetAllCommentsByFiction = (id, nav) => {
  return model.Comments.findAll({
    include:[
      {
        model: model.User,
        attributes:['Id', 'avatar', 'LastName', 'FirstName']
      },
      { model: model.Fiction,      
        where: { Title: id }
      }
    ],
  })
}
const AddRating = (id, data) => {
  console.log("**** AddRating ****", id, data);
  const promises = []
  const request = model.Rating.create({
    Id: uuidv4(),
    FictionId: data.FictionId,
    UserId: data.UserId,
    Rating: data.Rating,
    DateRated: data.DateRated
  })
  promises.push(request)
  return request
    .then((w) => {
      const newRequestFind = model.Rating.findAll({ where: { FictionId: data.FictionId } })
      promises.push(newRequestFind)
      return newRequestFind
        .then((rating) => {
          // Vérifier si des notes ont été trouvées
          if (rating.length > 0) {
            // Calculer la note moyenne
            const totalRating = rating.reduce((acc, curr) => acc + curr.Rating, 0);
            const averageRating = totalRating / rating.length;
            // Mettre à jour la fiction avec la nouvelle note moyenne
            return model.Fiction.update({ AverageRating: averageRating }, { where: { Id: data.FictionId } });
          } else {
            console.log('Aucune note trouvée pour cette fiction.');
          }
        })
        .then(() => {
          console.log('Note moyenne mise à jour avec succès.');
        })
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}
const CreateCommentForAFiction = (id, data) => {
  console.log("**** CreateCommentForAFiction ****", id, data);
  const promises = []
  const comment = model.Comments.create({
    Id: uuidv4(),
    Content: data.Content,
    DateCreation: new Date().toISOString(),
    UserId: data.UserId,
    FictionId: data.FictionId,
  })
  console.log(comment)
  promises.push(comment)
  return comment
    .then((w) =>{
      return Promise.all(promises);
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}
const UpdateFictionIllustration = (id, image) => {
  
  console.log("**** UpdateFictionIllustration ****",id, image);
  const promises = []
  const newImage = '/images/Fictions/'+image
  const request = model.Fiction.update({ Image: newImage }, { where: { Id: id } })
  promises.push(request)
  return request
    .then((w) => {
      console.log(w)
      return Promise.all(promises);
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}
const queries = {
  countAllFictionsOnBases,
  countAllMyFictions,
  GetAllFictionsOnBase,
  CountTotalWordBuUser,
  CountTotalWordByUserV2,
  GetAllFictionsByName,
  AddRating,
  CreateCommentForAFiction,
  GetAllCommentsByFiction,
  GetAllFictionsByUser,
  UpdateFictionIllustration
};

module.exports = queries;