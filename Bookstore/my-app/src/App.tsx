import React from "react";
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

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewReleasesPage />}></Route>
          <Route path="/Cart" element={<CartPage />}></Route>
          <Route path="/Favorites" element={<FavoritesPage />}></Route>
          <Route path="/Account" element={<AccountPage />}></Route>
          <Route path="/NewPassword" element={<NewPasswordPage />}></Route>
          <Route path="/ResetPassword" element={<ResetPasswordPage />}></Route>
          <Route path="/SignUpSignIn" element={<SignUpSignInPage />}></Route>
          <Route path="/Book/:id" element={<FullPostPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
