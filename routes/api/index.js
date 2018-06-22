/** Require express router */
const router = require("express").Router();
/** Require articles router to be able to use their paths */
const articleRoutes = require("./articles");

/** Define usage of this router */
/** This adds /articles to the path of the articleRoutes */
/** As of here, the path is /articles */
router.use("/articles", articleRoutes);

/** This export will allow access from the api */
/** Instead of having to navigate to api/articles */
/** It will be called in the index file in the above path */
module.exports = router;