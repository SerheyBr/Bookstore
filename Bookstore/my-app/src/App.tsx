import React from "react";
import Layout from "./Components/Layout/Layout";
import SubscriptionBlock from "./Components/SubscriptionBlock/SubscriptionBlock";
import ProductCard from "./Components/ProductCard/ProductCard";
import NewReleasesPage from "./pages/NewReleasesPage/NewReleasesPage";
import FullPostPage from "./pages/FullPostPage/FullPostPage";
import CartPage from "./pages/CartPage/CartPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import AccountPage from "./pages/AccountPage/AccountPage";

function App() {
  return (
    <div id="app">
      <Layout>
        <AccountPage />
        {/* <FavoritesPage /> */}
        {/* <CartPage /> */}
        {/* <FullPostPage /> */}
        {/* <NewReleasesPage></NewReleasesPage> */}
      </Layout>
    </div>
  );
}

export default App;
