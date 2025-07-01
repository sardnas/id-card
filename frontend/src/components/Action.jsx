import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import color from "../assets/colors";

const InteractBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  width: 100%;
  height: 100%;
  border-radius: 8px;
  @media (max-width: 450px) {
    border-radius: 0;
    margin-left: 0;
  }
`;
const Action = () => {
  return <InteractBlock></InteractBlock>;
};

export default Action;
