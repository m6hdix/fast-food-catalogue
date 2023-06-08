import axios from "axios";

export default axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
