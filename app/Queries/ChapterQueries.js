const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const ClanLocation = {
  model: model.ChapterLocation,
  include: [{
    model: model.Location
  }]
}

const GetAChapterById= (Id) => {
  console.log("**** GetAChapterByName ****", Id);
  console.log(Id)
  return model.Chapter.findOne({
    where: { Id: { [model.Utils.Op.like]: `%${Id}%` }, },
    include: [
      ClanLocation,
      {
        model: model.ChapterIllustration,
        include: [{ model: model.Illustration }]
      },
      {
        model: model.Fiction,
        attributes: ['Id','UserId', 'Title'],
        include: [
          { model: model.FictionIllustration },
          {
            model: model.User,
            attributes: ['Id', 'UserName']
          }]
      },]
  });
};

const GetAChapterByName = (title) => {
    console.log("**** GetAChapterByName ****", title);
    return model.Chapter.findOne({
      where: { Title: { [model.Utils.Op.like]: `%${title}%` }, },
      include: [
        ClanLocation,
        {
          model: model.ChapterIllustration,
          include: [{ model: model.Illustration }]
        },
        {
          model: model.Fiction,
          attributes: ['Id','UserId', 'Title'],
          include: [
            { model: model.FictionIllustration },
            {
              model: model.User,
              attributes: ['Id', 'UserName']
            }]
        },]
    });
  };
  const GetLastChapterOfAFiction = (FictionId) => {
    console.log("**** GetLastChapterOfAFiction ****", FictionId);
    return model.Chapter.findOne({
      where: {
        FictionId: FictionId,
        NextChapterId: null
      },
      include: [ClanLocation]
    })
  }
  const GetFiveLastChapByUser = (usr) => {
    console.log("**** GetFiveLastChapByUser ****", usr);
    return model.Chapter.findAll({
      limit: 3,
      attributes: ['Id', 'Title', 'DateCreation', 'Image'],
      order: [['DateCreation', 'DESC']],
      include: [{
        model: model.Fiction,
        attributes: ['Id', 'Title', 'Image'],
        where: { UserId: { [model.Utils.Op.like]: `%${usr}%` } }
      }]
    })
  }
  
const CreateANewChapter = (FictionId, data, imagePath) => {
    console.log("**** CreateANewChapter ****", FictionId, data, imagePath);
    const date = new Date().toISOString()
    const promises = []
    const newChapter = {
      Id: data.Id,
      Title: data.Title,
      Content: data.Content,
      Image: '/images/Fictions/'+imagePath,
      FictionId: FictionId,
      NextChapterId: null,
      DateCreation: date,
      NumberChapter: data.NumberChapter,
    }
    const precedentChapter = {
      NextChapterId: data.Id
    }
    const firstRequest = model.Chapter.create(newChapter)
    promises.push(firstRequest)
    return firstRequest
      .then((response) => {
        if (data.NumberChapter === 1) {
          return Promise.all(promises);
        } else {
          const secondRequest = model.Chapter.update(precedentChapter,
            { where: { Id: data.PrecedentChapterId } })
          promises.push(secondRequest)
          return secondRequest
            .then((response) => {
              return Promise.all(promises);
            })
        }
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }
  const EditChapter = (id, data) => {
    console.log("**** EditChapter ****", id, data);
    const promises = []
    const chapter = { Content: data.Content}
    const request = model.Chapter.update(chapter, { where: { Id: data.Id } })
    promises.push(request)
    return request
      .then(w => { return Promise.all(promises) })
      .catch(err => { console.log("ERROR: ", err) })
  }
  const queries = {
    GetAChapterById,
    GetAChapterByName,
    GetLastChapterOfAFiction,
    GetFiveLastChapByUser,
    CreateANewChapter,
    EditChapter
  }
  module.exports = queries;