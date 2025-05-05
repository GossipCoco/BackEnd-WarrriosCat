const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

/**
 * 
 * @returns Object
 */
const GetAllImagesTable = () => {
    const promise = [];
    const request = model.Image.findAndCountAll({});
    promise.push(request);
    return request
      .then((w) => {
        const nbResult = Object.keys(w.rows).length;
        return { count: nbResult, row: w };
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  };
  const GetAllIllustrations = () => {
    console.log("********** GetAllIllustration **********");
    return model.Illustration.findAll({
      attributes:['Id']
    })

  }
  const UploadUserAvatar = (data, id) => {
    console.log("********** UploadUserAvatar **********", data, id);
    const promises = [];
    const newRequest = model.User.update({ Avatar: data }, { where: { Id: id } });
    promises.push(newRequest);
    return newRequest
      .then((w) => {
        return Promise.all(promises);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  };
  const getAll = (modelName) => {
    console.log("********** getAll **********  : ", model[modelName])
    const newModel = model[modelName];
    console.log("model : ", newModel)
    if (!newModel) {
      throw new Error(`Model ${modelName} does not exist.`);
    }
    return newModel.findAll({});
  };
  const GetAllBackground = () => {
    console.log("********** GetAllBackground **********")
    return model.Parallax.findAll({
      attributes:['Image'],
      where: { Position : '0' }
    })

  }
  const queries = {
    GetAllImagesTable,
    GetAllIllustrations,
    UploadUserAvatar,
    getAll,
    GetAllBackground
  }
  module.exports = queries;