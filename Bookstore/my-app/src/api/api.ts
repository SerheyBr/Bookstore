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
  authUser: async (data: any) => {
    return axios({
      method: "post",
      url: "https://studapi.teachmeskills.by/auth/users/",
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  activationUser: async (token: any) => {
    return axios({
      method: "post",
      url: "https://studapi.teachmeskills.by/auth/users/activation/",
      data: token,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  createJwtToken: async (user: any) => {
    return axios({
      method: "post",
      url: "https://studapi.teachmeskills.by/auth/jwt/create/",
      data: user,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  retrieveUser: async (token: any) => {
    return axios({
      method: "get",
      url: "https://studapi.teachmeskills.by/auth/users/me/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  resetPassword: async (email: any) => {
    return axios({
      method: "post",
      url: "https://studapi.teachmeskills.by/auth/users/reset_password/",
      data: { email: email },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  newPassword: async (data: any) => {
    return axios({
      method: "post",
      url:
        "https://studapi.teachmeskills.by/auth/users/reset_password_confirm/",
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  virifyToken: async (token: any) => {
    return axios({
      method: "post",
      url: "https://studapi.teachmeskills.by/auth/jwt/verify/",
      data: { token },
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getRefreshToken: async (token: any) => {
    return axios({
      method: "post",
      url: "https://studapi.teachmeskills.by/auth/jwt/refresh/",
      data: { refresh: token },
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
