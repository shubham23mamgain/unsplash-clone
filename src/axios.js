import axios from "axios";

const instance = axios.create({
  baseUrl: "https://api.unsplash.com/",
});

export default instance;