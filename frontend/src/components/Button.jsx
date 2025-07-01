import React from "react";
import styled from "styled-components";
import color from "../assets/colors";
import Text from "./Text";

const StyledButton = styled.button`
  width: 100%;
  padding: 8px;
  border: 0;
  background-color: ${color.green.shade3};
  margin-top: 8px;
  :hover {
    background-color: ${color.green.default};
    cursor: pointer;
  }
`;

const Button = ({ label = "label", onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Text color={color.white.default}>{label}</Text>
    </StyledButton>
  );
};

export default Button;
