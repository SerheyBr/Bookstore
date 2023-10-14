import React, { useState } from "react";
import { StyledTitlesTabs } from "./style";

const Tabs = ({ book }: any) => {
  const [selectedSection, setSelectedSection] = useState(1);

  const handleTabst = (index: number) => {
    setSelectedSection(index);
  };

  return (
    <div>
      <div>
        <StyledTitlesTabs>
          <li
            onClick={() => {
              handleTabst(1);
            }}
            className={selectedSection === 1 ? "active" : ""}
          >
            Description
          </li>
          <li
            onClick={() => {
              handleTabst(2);
            }}
            className={selectedSection === 2 ? "active" : ""}
          >
            Authors
          </li>
          <li
            onClick={() => {
              handleTabst(3);
            }}
            className={selectedSection === 3 ? "active" : ""}
          >
            Subtitle
          </li>
        </StyledTitlesTabs>
        <div>
          {selectedSection === 1 ? (
            <div>{book.desc}</div>
          ) : selectedSection === 2 ? (
            <div>{book.authors}</div>
          ) : selectedSection === 3 ? (
            <div>{book.subtitle}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
