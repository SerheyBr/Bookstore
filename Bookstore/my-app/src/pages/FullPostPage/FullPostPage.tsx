import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { IBook } from "../../types/types";
import {
  WrapperArrow,
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
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";
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
