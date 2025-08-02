import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_CG_API_KEY;

export const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  // headers: {
  //   "x-cg-demo-api-key": API_KEY,
  // },
});
