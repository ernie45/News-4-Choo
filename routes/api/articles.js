/** Require express router to construct article routings */
const router = require("express").Router();

/** Require request to allow processing of the newyorktimes website */
const request = require("request");
/** Require cheerio for parsing the website */
const cheerio = require("cheerio");

/** Create a connection to the MongoDB */
const mongoose = require("mongoose");
mongoose.Promise = Promise;
/** Construct the Mongo client */

/** Construct the routings */
router.route("/")
/** When receiving the root get request */
.get((req, res) => {
    /** Use request to load up the nytimes site */
    request("https://www.nytimes.com/", (error, response, html) => {

    });
});

module.exports = router;