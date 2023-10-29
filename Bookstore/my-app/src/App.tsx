import React from "react";
import Layout from "./Components/Layout/Layout";
import NewReleasesPage from "./pages/NewReleasesPage/NewReleasesPage";
import FullPostPage from "./pages/FullPostPage/FullPostPage";
import CartPage from "./pages/CartPage/CartPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import SignUpSignInPage from "./pages/SignUpSignInPage/SignUpSignInPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import NewPasswordPage from "./pages/NewPasswordPage/NewPasswordPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import PrivateRout from "./Components/PrivateRout/PrivateRout";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { useTypedSelector } from "../src/hooks/useTypedSelector";
import { UserActions } from "../src/store/actions/userActions";
import { api } from "./api/api";

function App() {
  const { userAuth } = UserActions();
  const user = useTypedSelector((state) => state.user);

  const accessToken: any = localStorage.getItem("access_token");
  const refreshToken: any = localStorage.getItem("refresh_token");

  if (accessToken && refreshToken) {
    if (!user.username) {
      api
        .retrieveUser(JSON.parse(accessToken))
        .then((data) => {
          userAuth(data.data);
        })
        .catch(() => {
          const access = JSON.parse(accessToken);
          api
            .virifyToken(access)
            .then(() => {})
            .catch(() => {
              api.getRefreshToken(JSON.parse(refreshToken)).then((data) => {
                api.retrieveUser(data.data.access).then((data) => {
                  userAuth(data.data);
                });
              });
            });
        });
    }
  }

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewReleasesPage />}></Route>
          <Route path="/Cart" element={<CartPage />}></Route>
          <Route
            path="/Favorites"
            element={
              <PrivateRout>
                <FavoritesPage />
              </PrivateRout>
            }
          ></Route>
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
