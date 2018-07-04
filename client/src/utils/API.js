/** Import axios as the website scraper */
import axios from "axios";
/** Export the API */
export default {
    /** Send a GET request for all the articles */
    getArticles: () => {
        return axios.get("/api/articles");
    },
    saveArticle: id => {
        return axios.put("/api/articles/" + id);
    },
    deleteArticle: id => {
        return axios.delete("/api/articles/" + id);
    }
}