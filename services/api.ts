import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.12:5000", // Android Emulator
});

export const TMDB_IMG = "https://image.tmdb.org/t/p/w500";

export default API;
