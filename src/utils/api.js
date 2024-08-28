import axios from "axios";

export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "7864b53fd6msh9c19338752b3748p19a239jsn33d266d7665b",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
