/** Require express router */
const router = require("express").Router();
/** Require path for path routing */
const path = require("path");
/** Require api routes to redefine */
/** These can be called from api without routing into the actual file */
/** Because api folder has an index file that exports the articles */
const apiRoutes = require("./api");

/** Define the api routes */
/** This adds /api to the path */
/** As of this, the path is now /api/articles */
/** Allow router to use api routes */
router.use("/api", apiRoutes);
/** Allow router to use the main index */
router.use((req, res) => {
  /** Respond with sending an html file using path */
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

/** This index file export will be called in server.js */
/** It will allow access without the whole path into the api */
module.exports = router;