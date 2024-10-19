const countFuntion = (request) => {
    return request
    .then(w => {
      const nbResult = Object.keys(w.rows).length
      return { count: nbResult }
    })
    .catch(err => {
      console.log("ERROR: ", err)
    })
  }

const functions = {
    countFuntion
}
module.exports = functions