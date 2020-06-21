import axios from "axios";

const api = axios.create({
    baseURL:'https://us-central1-anoni-52994.cloudfunctions.net' ,
})
export default api;