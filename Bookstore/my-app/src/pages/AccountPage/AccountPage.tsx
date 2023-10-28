import React from "react";
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";
import Title from "../../Components/Title/Title";
import CustomInput from "../../Components/CustomInput/CustomInput";
import {
  StuledBtnLogout,
  StyledInput,
  StyledTitle,
  WrapperBox,
  WrapperBtns,
  WrapperContent,
  WrapperItems,
  WrapperUserInfo,
} from "./style";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { UserActions } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { cartItemQuantity } from "../../utilits/helpers";
import { Link } from "react-router-dom";

const AccountPage = () => {
  const user = useTypedSelector((state) => state.user);
  const favorites = useTypedSelector((state) => state.books.favorites);
  const cart = useTypedSelector((state) => state.books.cart);
  const navigation = useNavigate();
  const { userLogout } = UserActions();
  const handlerLogoutBtn = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    userLogout();
    navigation("/SignUpSignIn");
  };

  return (
    <div className="container">
      <ArrowBackPage />
      <StyledTitle>
        <Title title={"account"} />
      </StyledTitle>
      <WrapperContent>
        <WrapperUserInfo>
          <h5>Profile</h5>
          <div>
            <StyledInput>
              <CustomInput
                title={"Name"}
                type={"text"}
                value={user.username}
                placeholder={"Name"}
                dislabel={true}
              />
            </StyledInput>
            <StyledInput>
              <CustomInput
                title={"Email"}
                type={"text"}
                value={user.email}
                placeholder={"Email"}
                dislabel={true}
              />
            </StyledInput>
          </div>
        </WrapperUserInfo>
        <WrapperItems>
          <WrapperBox>
            <Link to={"/Cart"}>
              <h4>cart</h4>
              {cart.length ? (
                <p>
                  there are <span>{cartItemQuantity(cart)}</span> items in the
                  cart
                </p>
              ) : (
                <p>no favorite products</p>
              )}
              <div>
                <FavoriteBorderIcon />
              </div>
            </Link>
          </WrapperBox>

          <WrapperBox>
            <Link to={"/Favorites"}>
              <h4>favorites</h4>
              {favorites.length ? (
                <p>
                  there are <span>{favorites.length}</span> products in my
                  favorites
                </p>
              ) : (
                <p>no favorite products</p>
              )}

              <div>
                <ShoppingCartOutlinedIcon />
              </div>
            </Link>
          </WrapperBox>
        </WrapperItems>
      </WrapperContent>
      <WrapperBtns>
        <StuledBtnLogout>
          <CustomButton
            title={"logout"}
            typebtn={"fill"}
            onClick={() => {
              handlerLogoutBtn();
            }}
          />
        </StuledBtnLogout>
      </WrapperBtns>
    </div>
  );
};

export default AccountPage;
