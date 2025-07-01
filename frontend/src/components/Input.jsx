// components/Input.jsx
import React from "react";
import styled from "styled-components";
import color from "../assets/colors";

const StyledInput = styled.input`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 0;
  border-bottom: 1px dotted ${color.grey.default};
  :focus {
    outline: none;
    border-bottom: 2px solid ${color.blue.default};
  }
`;

const Input = ({
  type = "text",
  placeholder = "placeholder",
  value,
  onChange,
  ...rest
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
