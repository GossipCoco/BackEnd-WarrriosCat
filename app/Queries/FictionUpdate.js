const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const functions = require('../Functions/countFunctions')

const WhereByUser =  { model: model.User, attributes: ['Id', 'UserName']}
const modelChapter = { model: model.Chapter }

const UpdateRating = (id, data) => {
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
const UploadFictionBackgroundIllustration = (id, image) => {
  console.log("**** UploadFictionBackgroundIllustration ****",id, image);
  const promises = []
  const Image = '/images/Fictions/'+image
    const requestCreateIllustrationn = model.Illustration.create({
      Id: Image,
      DateCreation: new Date().toISOString()
    }
  )
  promises.push(requestCreateIllustrationn)
  return(requestCreateIllustrationn)   
  .then((w)=> {
    const requestFictionIllustration = model.FictionIllustration.update({IllustrationId: Image}, { where: { FictionId: id }})
    promises.push(requestFictionIllustration)
    return requestFictionIllustration
    .then(w => { return Promise.all(promises) })
    .catch(err => { console.log("ERROR: ", err) })
  })
}
const queries = {
  UpdateRating,
  UpdateFictionIllustration,
  UploadFictionBackgroundIllustration,
};

module.exports = queries;