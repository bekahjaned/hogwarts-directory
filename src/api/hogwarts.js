import axios from "axios";

export default axios.create({
    baseURL: 'http://hp-api.herokuapp.com/api/characters'
})