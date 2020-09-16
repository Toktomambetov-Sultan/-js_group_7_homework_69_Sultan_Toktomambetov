import axios from "axios";
const axiosOrder = axios.create({
  baseURL: "http://api.tvmaze.com/search/shows",
});
export default axiosOrder;
