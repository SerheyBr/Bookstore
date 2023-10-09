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

const FullPostPage = () => {
  //   const [moreIcons, setMoreIcons] = useState<boolean>(false);
  const [books, setBooks] = useState<null | IBook[]>(null);

  const getCards = async () => {
    return await fetch("https://api.itbook.store/1.0/new", {
      mode: "cors",
    });
  };

  useEffect(() => {
    getCards()
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);

  //   /запрос одной книги
  const [oneBook, setOneBook] = useState<any>(null);
  const getbook = async () => {
    return await fetch("https://api.itbook.store/1.0/books/9781801812856", {
      mode: "cors",
    });
  };

  useEffect(() => {
    getbook()
      .then((res) => res.json())
      .then((data) => setOneBook(data));
  }, []);

  //   const handleMoreIcons = () => {
  //     setMoreIcons((prev) => !prev);
  //   };

  return (
    <div className="container">
      {oneBook ? (
        <div>
          <WrapperArrow>
            <button>
              <KeyboardBackspaceIcon />
            </button>
            <button>
              <EastIcon />
            </button>
          </WrapperArrow>
          <StyledTitle>
            <Title title={oneBook.title} />
          </StyledTitle>
          <WrapperFoolCard>
            <FullCard book={oneBook} />
          </WrapperFoolCard>
          <WrapperTabs>
            <Tabs book={oneBook} />
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
