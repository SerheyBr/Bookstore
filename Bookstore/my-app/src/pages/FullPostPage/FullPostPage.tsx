import React, { useEffect, useState } from "react";
import {
  StyledTitle,
  WrapperFoolCard,
  WrapperTabs,
  WrapperSubscription,
  CircleLoading,
  WrapperIcons,
} from "./style";
import FullCard from "../../Components/FullCard/FullCard";
import Title from "../../Components/Title/Title";
import Tabs from "../../Components/Tabs/Tabs";
import SubscriptionBlock from "../../Components/SubscriptionBlock/SubscriptionBlock";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import CircularProgress from "@mui/material/CircularProgress";
import SocialLinkIcons from "../../Components/SocialLinkIcons/SocialLinkIcons";
import ArrowBackPage from "../../Components/ArrowGoHome/ArrowGoHome";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

const FullPostPage = () => {
  const [book, setBook] = useState<any>(null);
  const { id } = useParams();

  useEffect(() => {
    api.getSelectedBook(id).then((data) => setBook({ ...data, inCart: 0 }));
  }, [id]);

  return (
    <div className="container">
      <ArrowBackPage />
      {book ? (
        <div>
          <StyledTitle>
            <Title title={book.title} />
          </StyledTitle>
          <WrapperFoolCard>
            <FullCard book={book} />
          </WrapperFoolCard>
          <WrapperTabs>
            <Tabs book={book} />
          </WrapperTabs>
          <WrapperIcons>
            <SocialLinkIcons />
          </WrapperIcons>
          <WrapperSubscription>
            <SubscriptionBlock />
          </WrapperSubscription>
        </div>
      ) : (
        <CircleLoading>
          <CircularProgress />
        </CircleLoading>
      )}
      <div>
        <ProductCarousel title={"Similar Books"} />
      </div>
    </div>
  );
};

export default FullPostPage;
