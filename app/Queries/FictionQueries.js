const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const functions = require('../Functions/countFunctions')

const WhereByUser =  { model: model.User, attributes: ['Id', 'UserName']}
const modelChapter = { model: model.Chapter }

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
const GetAllAUthors = () => {
  console.log("********  GetAllAUthors ********");
  return model.User.findAll({
    attributes: ['Id', 'Username'],  // Les attributs que vous voulez afficher pour les auteurs
    include: [
      {
        model: model.Fiction,
        attributes: [],  // Aucune donnée de `Fiction` n'est nécessaire, on veut juste vérifier l'existence
      },
    ],
    distinct: true,  // Assure de récupérer des résultats uniques
  });
};
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
  return model.Fiction.findOne({
    where: {
      Title: { [model.Utils.Op.like]: `%${name}%` },
    },
    include: [
      { model: model.FictionKind,
        attributes: ['KindId']},
      {
        model: model.User,
        attributes: ['Id', 'UserName']
      },
      { model: model.FictionIllustration,  attributes: ['IllustrationId'] },
      {
        model: model.Chapter,
        separate: true, // important pour permettre le tri
        order: [['NumberChapter', 'ASC']],
        attributes: ['Id', 'Title', 'NbWords']
      },     
      {
        model: model.Game,
        attributes: ['Id'],
        include: [          
          {
            model: model.GameCharacter,
            attributes: ['Id'],
            include: [
              {
                model: model.Character,
                attributes: ['Id', 'CurrentName', 'Image'],
                include: [
                  {
                    model: model.Warrior,
                    attributes: ['Name'],
                    include: [{ model: model.Clan,
                      attributes: ['Id','Name'],
                    }],
                  },
                ],
              },
            ],
          },
          {
            model: model.GameGamer,
            include: [{
              model: model.Gamer,
              attributes: ['CurrentName', 'Image'],
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

const queries = {
  GetAllFictionsOnBase,
  GetAllFictionsByName,
  GetAllCommentsByFiction,
  GetAllFictionsByUser,
  GetAllAUthors,
  CreateCommentForAFiction,
};

module.exports = queries;