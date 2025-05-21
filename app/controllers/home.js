const queries = require('../Queries/HomeQueries')
const Home = {};

Home.get = (req, res) => {
    res.send({
        title: 'Bienvenue sur votre dashboard'
    }).status(200)
}
Home.GetFaq = (req, res) => {
    queries.GetFaq()
    .then(w => {
        res.send({ob: w, res: true}).status(200)
    })
    .catch(err => {
        console.log(err)
        res.send(err).status(500)
    })
}
module.exports = Home;