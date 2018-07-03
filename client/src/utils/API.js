/** Import axios as the website scraper */
import axios from "axios";
/** Export the API */
export default {
    /** Send a GET request for all the articles */
    getArticles: () => {
        return axios.get("/api/articles");
    }
}