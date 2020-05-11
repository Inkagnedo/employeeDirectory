import axios from "axios";
const BASEURL = "https://reqres.in/api/users";

export default {
    search: function() {
        return axios.get(BASEURL);
    }
};