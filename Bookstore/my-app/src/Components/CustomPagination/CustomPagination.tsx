import React, { FC } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledPagination } from "./style";

interface IPaginationProps {
  pages: number;
}

const CustomPagination: FC<IPaginationProps> = ({ pages }) => {
  return (
    <StyledPagination>
      <Pagination
        count={pages}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </StyledPagination>
  );
};

export default CustomPagination;
