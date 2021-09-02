import React, { useState } from "react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Spinner = () => {
  return (
    <>
      <div className="sweet-loading">
        <SyncLoader
          size={16}
          margin={5}
          loading={true}
          color={"#56ccf2"}
          css={override}
        ></SyncLoader>
      </div>
    </>
  );
};

export default Spinner;
