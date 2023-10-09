import React from "react";
import Layout from "./Components/Layout/Layout";
import SubscriptionBlock from "./Components/SubscriptionBlock/SubscriptionBlock";
import ProductCard from "./Components/ProductCard/ProductCard";
import NewReleasesPage from "./pages/NewReleasesPage/NewReleasesPage";
import FullPostPage from "./pages/FullPostPage/FullPostPage";

function App() {
  return (
    <div id="app">
      <Layout>
        <FullPostPage />
        {/* <NewReleasesPage></NewReleasesPage> */}
      </Layout>
    </div>
  );
}

export default App;
