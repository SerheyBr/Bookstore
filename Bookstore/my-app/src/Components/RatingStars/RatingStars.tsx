import React, { FC } from "react";
import Rating from "@mui/material/Rating";

interface IRatingStarsProps {
  rating: number;
}

const RatingStars: FC<IRatingStarsProps> = ({ rating }) => {
  return <Rating name="read-only" value={+rating} readOnly />;
};

export default RatingStars;
