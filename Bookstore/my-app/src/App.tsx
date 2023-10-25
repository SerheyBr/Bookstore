import React, { useEffect } from "react";
import Layout from "./Components/Layout/Layout";
import SubscriptionBlock from "./Components/SubscriptionBlock/SubscriptionBlock";
import ProductCard from "./Components/ProductCard/ProductCard";
import NewReleasesPage from "./pages/NewReleasesPage/NewReleasesPage";
import FullPostPage from "./pages/FullPostPage/FullPostPage";
import CartPage from "./pages/CartPage/CartPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import SignUpSignInPage from "./pages/SignUpSignInPage/SignUpSignInPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import NewPasswordPage from "./pages/NewPasswordPage/NewPasswordPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Routes, Route, Outlet } from "react-router-dom";
import PrivateRout from "./Components/PrivateRout/PrivateRout";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { useTypedSelector } from "../src/hooks/useTypedSelector";
import axios from "axios";
import { UserActions } from "../src/store/actions/userActions";
import { useNavigate } from "react-router-dom";

const retrieveUser = async (token: any) => {
  return await axios({
    method: "get",
    url: "https://studapi.teachmeskills.by/auth/users/me/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const virifyToken = async (token: any) => {
  return await axios({
    method: "post",
    url: "https://studapi.teachmeskills.by/auth/jwt/verify/",
    data: { token },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const refreshTokenAsync = async (token: any) => {
  return await axios({
    method: "post",
    url: "https://studapi.teachmeskills.by/auth/jwt/refresh/",
    data: { refresh: token },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

function App() {
  const navigate = useNavigate();
  //   useEffect(() => {
  //     navigate("/");
  //   }, []);
  const { userAuth } = UserActions();
  const user = useTypedSelector((state) => state.user);

  const accessToken: any = localStorage.getItem("access_token");
  const refreshToken: any = localStorage.getItem("refresh_token");

  if (accessToken && refreshToken) {
    if (!user.username) {
      retrieveUser(JSON.parse(accessToken))
        .then((data) => {
          userAuth(data.data);
        })
        .catch((error) => {
          const access = JSON.parse(accessToken);
          virifyToken(access)
            .then((data) => {})
            .catch((error) => {
              refreshTokenAsync(JSON.parse(refreshToken)).then((data) => {
                retrieveUser(data.data.access).then((data) => {
                  userAuth(data.data);
                });
              });
            });
        });

      //  retrieveUser(JSON.parse(accessToken)).catch((error) => {
      //    console.log(error);
      //    console.log("падаем в ошибку");
      //    const access = JSON.parse(accessToken);
      //    virifyToken(access)
      //      .catch((error) => {
      //        console.log(error);
      //        console.log("старый токен не действителен");
      //        refreshTokenAsync(JSON.parse(refreshToken)).then((data) => {
      //          console.log(data);
      //          if (data.data) {
      //            const newAccessToken = data.data.access;
      //            console.log(newAccessToken);
      //            retrieveUser(newAccessToken);
      //          }
      //        });
      //      })
      //      .then((data) => {
      //        console.log("в ошибку не падаем");
      //        retrieveUser(accessToken).catch((error) => {
      //          console.log(error);
      //        });
      //      });
      //  });

      //  .then((data: any) => {
      //    if (data) {
      //      userAuth(data.data);
      //    }
      //  });
    }
  }

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewReleasesPage />}></Route>
          <Route path="/Cart" element={<CartPage />}></Route>
          <Route path="/Favorites" element={<FavoritesPage />}></Route>
          <Route
            path="/Account"
            element={
              <PrivateRout>
                <AccountPage />
              </PrivateRout>
            }
          ></Route>
          <Route path="/activate/:uid/:token" element={<SuccessPage />}></Route>
          <Route
            path="/password/reset/confirm/:uidReset/:tokenReset"
            element={<NewPasswordPage />}
          ></Route>
          <Route path="/password/reset" element={<ResetPasswordPage />}></Route>
          <Route path="/SignUpSignIn" element={<SignUpSignInPage />}></Route>
          <Route path="/Book/:id" element={<FullPostPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
