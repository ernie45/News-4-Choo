const request = require("request");
module.exports = {
    specificSearch: (req, res) => {
        console.log(process.env.NYT_API_KEY);
        console.log(NYT_API_KEY);
        request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                'api-key': NYT_API_KEY,
                'q': req.query.topic,
                // "begin_date": req.query.startDate,
                // "end_date": req.query.endDate
            },
        }, function(err, response, body) {
            body = JSON.parse(body);
            res.send(body);
        });
    }
};