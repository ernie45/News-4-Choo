/** Require express router to construct article routings */
const router = require("express").Router();
/** Require request to allow processing of the newyorktimes website */
const request = require("request");
/** Require cheerio for parsing the website */
const cheerio = require("cheerio");
/** Bring in the database controllers */
const articleController = require("../../controllers/articleController");
const scrapeController = require("../../controllers/scrapeController");

/** Construct the routings */
router.route("/")
/** When receiving the root get request */
.get((req, res) => {
    /** Scrape the new york times website */
    scrapeController.scrape(req, res);
});

router.route("/:id")
/** When receiving the api/articles/:id put request */
.put((req, res) => {
    articleController.saveArticle(req, res);
})

.delete((req, res) => {
    articleController.deleteArticle(req, res);
});

module.exports = router;