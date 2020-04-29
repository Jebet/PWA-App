import axios from "axios";
const instance = axios.create({
  baseURL: "https://www.superheroapi.com/api.php/10218834518192496/search/all",
});
export default instance;
