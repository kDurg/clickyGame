import axios from "axios";

export default {
    getRandomKitten: function () {
        return axios.get("http://placekitten.com/200/300");
    }
}