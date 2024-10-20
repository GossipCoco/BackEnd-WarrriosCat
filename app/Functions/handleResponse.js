const handleResponse = (res, promise, message) => {
    promise
      .then((result) => res.status(200).send({ ob: result, res: true, message: message }))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  };

  module.exports = { handleResponse };