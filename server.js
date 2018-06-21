/** Require express */
/** And its dependencies */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");


/** Define express app usage */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/** Define express routing static path */
/** This is where everything will be directed from */
app.use(express.static("client/build"));
/** Add the routing to the express app */
app.use(routes);

/** Use port 3001, or the environment port */
const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
    console.log("App listening on port " + PORT);
});