import axios from "axios";

export default axios.create({
    baseURL: "https://nasba-backend.herokuapp.com/graphql",
    method: "POST"
});
