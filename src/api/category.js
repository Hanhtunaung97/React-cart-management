import axios from "axios";

export const categoryApi = axios.create({
  baseURL: `${location.origin}/api/categories`,
  headers: {
    "content-type": "application/json",
  },
});
