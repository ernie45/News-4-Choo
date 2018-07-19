const request = require("request");
module.exports = {
    specificSearch: (req, res) => {
        if (req.query.startDate && req.query.endDate){
            request.get({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                qs: {
                    'api-key': process.env.NYT_API_KEY,
                    'q': req.query.topic,
                    "begin_date": req.query.startDate,
                    "end_date": req.query.endDate
                },
            }, function(err, response, body) {
                body = JSON.parse(body);
                res.send(body);
            });
        }
        else if (req.query.startDate && !req.query.endDate){
            request.get({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                qs: {
                    'api-key': process.env.NYT_API_KEY,
                    'q': req.query.topic,
                    "begin_date": req.query.startDate
                },
            }, function(err, response, body) {
                body = JSON.parse(body);
                res.send(body);
            });
        }
        else if (!req.query.startDate && req.query.endDate){
            request.get({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                qs: {
                    'api-key': process.env.NYT_API_KEY,
                    'q': req.query.topic,
                    "end_date": req.query.endDate
                },
            }, function(err, response, body) {
                body = JSON.parse(body);
                res.send(body);
            });
        }
        else{
            request.get({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                qs: {
                    'api-key': process.env.NYT_API_KEY,
                    'q': req.query.topic
                },
            }, function(err, response, body) {
                body = JSON.parse(body);
                res.send(body);
            });
        }
    }
};