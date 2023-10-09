import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { StyledIcons } from "./style";

const SocialLinkIcons = () => {
  const [moreIcons, setMoreIcons] = useState<boolean>(false);

  const handleMoreIcons = () => {
    setMoreIcons((prev) => !prev);
  };

  return (
    <StyledIcons>
      <li>
        <FacebookIcon />
      </li>
      <li>
        <TwitterIcon />
      </li>
      {moreIcons ? (
        <>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TelegramIcon />
          </li>
        </>
      ) : (
        ""
      )}

      <li>
        <button onClick={handleMoreIcons}>
          <MoreHorizOutlinedIcon />
        </button>
      </li>
    </StyledIcons>
  );
};

export default SocialLinkIcons;
