const request = require("request");
const cheerio = require("cheerio");
const articleController = require("./articleController");
module.exports = {
    scrape: (req, res) => {
        /** Use request to load up the nytimes site */
        request("https://www.nytimes.com/", (error, response, html) => {
            /** Load the site's html */
            var $ = cheerio.load(html);
            /** For each element, access the story-heading class in the html */
            /** This callback function is using the keyword this */
            /** Therefore we must be careful not to use arrow method */
            /** Because in arrow methods, this refers to the window */
            $(".story").each(function(i, element){
                /** Retreive the respective title */
                /** Point to the element's h2 child */
                /** And point to the h2 child's child with a tag */
                /** Refer to the associated text */
                var title = $(this).children("h2").children("a").text() || $(this).children("p.summary").text() || "no title";
                /** Grab onto the respective url */
                /** By doing same as before, but pointing to the href attribute in this case */
                var url = $(this).children("h2").children("a").attr("href") || "no link";
                /** Retreive the respective summary */
                /** Summary is accessed by accessing the p element in the element */
                /** Since there are multiple p elements, we target the one with summary as its class */
                var summary = $(this).children("p.summary").text() || title;
                /** Check incoming article */
                articleController.tryToCreate(req, res, title, url, summary);
            });
            /** Invoke findAll method by passing in req and res */
            articleController.findAll(req, res);
        });
    }
}