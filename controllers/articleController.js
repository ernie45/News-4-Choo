const db = require("../models");
/** Create a connection to the MongoDB */
const mongoose = require("mongoose");
mongoose.Promise = Promise;
/** Construct the Mongo client */
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/newsforchoo",
    {
        userMongoClient: true
    }
);

module.exports = {
    /** Search the database for all the  */
    findAll: (req, res) => {
        db.Article.find(req.query).sort({
            date: -1
        }).then(dbModel => {
            res.json(dbModel);
        }).catch(error => res.status(422).json(error));
    },
    tryToCreate: function(req, res, title, url, summary) {
        db.Article.findOne({
            title: title
        }).then(function(data) {
            if (data === null || data.title !== title){
                db.Article.create({
                    title: title,
                    date: new Date(),
                    summary: summary,
                    url: url
                }).then(data => {});
            }
        })
    }
};