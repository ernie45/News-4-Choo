/** Require mongoose as the ORM */
const mongoose = require("mongoose");
/** Reference a new mongoose schema */
const Schema = mongoose.Schema;
/** Create the schema appropriate to the situation */
const articleSchema = new Schema({
    /** Title is required */
    title: {
        type: String,
        required: true
    },
    /** Date article was published */
    date: {
        type: Date
    },
    /** Url for the article */
    url: {
        type: String
    },
    summary: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false
    }
});
/** Create a model for articles using the previously defined schema */
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;