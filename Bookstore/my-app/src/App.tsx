import React, { useEffect } from "react";
import Layout from "./Components/Layout/Layout";
import NewReleasesPage from "./pages/NewReleasesPage/NewReleasesPage";
import FullPostPage from "./pages/FullPostPage/FullPostPage";
import CartPage from "./pages/CartPage/CartPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import SignUpSignInPage from "./pages/SignUpSignInPage/SignUpSignInPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import PrivateRout from "./Components/PrivateRout/PrivateRout";
import { useTypedSelector } from "../src/hooks/useTypedSelector";
import { UserActions } from "../src/store/actions/userActions";
import SearchPage from "./pages/SearchPage/SearchPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { saveLocalStorageArray } from "./utilits/helpers";
import { RootState } from "./store";

function App() {
  const favorite = useTypedSelector((state) => state.books.favorites);
  const cart = useTypedSelector((state) => state.books.cart);
  const { setUser }: { setUser: any } = UserActions();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser({ email: user.email, id: user.uid, token: user.accessToken });
      } else {
      }
    });
  }, []);

  useEffect(() => {
    saveLocalStorageArray(favorite, "favorites");
    saveLocalStorageArray(cart, "cart");
  }, [favorite, cart]);

  return (
    <div id="app">
      <Routes basename="/Bookstore">
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
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/SignUpSignIn" element={<SignUpSignInPage />}></Route>
          <Route path="/Book/:id" element={<FullPostPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
