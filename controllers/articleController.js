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
    /** When trying to create, first check if article already exists */
    tryToCreate: (req, res, title, url, summary) => {
        db.Article.findOne({
            title: title
        }).then(data => {
            /** If it does not exist, create a space for it in database */
            if (data === null){
                db.Article.create({
                    title: title,
                    date: new Date(),
                    summary: summary,
                    url: url
                }).then(dat => {});
            }
        })
    },
    /** Function to save articles using params from put request */
    saveArticle: (req, res) => {
        db.Article.update({
            _id: req.params.id
        }, 
        {
            $set: {
                saved: true
            }
        }).then(dbModel => {
            /** Upon saving, redirect to root page */
            /** So as to update the current view */
            res.redirect("/");
        });
    },
    deleteArticle: (req, res) => {
        db.Article.findById({
            _id: req.params.id
        }).then(dbModel => {
            dbModel.remove();
        }).then(() => {
            res.redirect("/");
        });
    }
};