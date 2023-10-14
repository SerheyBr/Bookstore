// import { client } from "../utils/http";
// const axios = require("axios").default;
import axios from "axios";

export const api = {
  getNewReleases: async () => {
    const res = await axios.get("https://api.itbook.store/1.0/new");
    const { data } = res;
    return data;
  },
  getSelectedBook: async (id: string | undefined) => {
    const res = await axios.get(`https://api.itbook.store/1.0/books/${id}`);
    const { data } = res;
    return data;
  },
  getSearchBooks: async (search: string | undefined) => {
    const res = await axios.get(
      `https://api.itbook.store/1.0/search/${search}`
    );
    const { data } = res;
    return data;
  },
};
