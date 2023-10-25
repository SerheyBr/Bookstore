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
};

// const resetPasswordConfirm = async (data: any) => {
//   return await axios({
//     method: "post",
//     url: "https://studapi.teachmeskills.by/auth/users/reset_password_confirm/",
//     data: data,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
// };

// const resetPassword = async (email: any) => {
//   return await axios({
//     method: "post",
//     url: "https://studapi.teachmeskills.by/auth/users/reset_password/",
//     data: { email: email },
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
// };

// const retrieveUser = async (token: any) => {
//   console.log("передаем access токен и получаем пользователя");
//   return await axios({
//     method: "get",
//     url: "https://studapi.teachmeskills.by/auth/users/me/",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// const createJwtToken = async (user: any) => {
//   console.log("забрали токены");
//   return await axios({
//     method: "post",
//     url: "https://studapi.teachmeskills.by/auth/jwt/create/",
//     data: user,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
// };

// axios({
//   method: "post",
//   url: "https://studapi.teachmeskills.by/auth/users/activation/",
//   data: token,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

// axios({
//   method: "post",
//   url: "https://studapi.teachmeskills.by/auth/users/",
//   data: data,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });
