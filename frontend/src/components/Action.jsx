import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import color from "../assets/colors";
import Text from "./Text";
import Icon from "./Icon";
import { ClipLoader } from "react-spinners";
import Success from "./Success";

const InteractBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  border-radius: 8px;
  padding: 16px;
  @media (max-width: 450px) {
    border-radius: 0;
    margin-left: 0;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  margin-bottom: 32px;
  margin-top: 16px;
`;

const StyledButton = styled.button`
  background-color: ${color.white.default};
  border: none;
  display: flex;
  align-items: center;
  border: 1px solid ${color.grey.shade2};
  padding: 8px;
  border-radius: 8px;
  gap: 8px;
  &:hover {
    background-color: ${color.grey.shade1};
    cursor: pointer;
  }
`;

const Action = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleOnclick = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <InteractBlock>
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader color={color.blue.default} size={48} />
        </div>
      ) : success ? (
        <Success />
      ) : (
        <>
          <Header>
            <Icon name="idCard" color={color.blue.shade3} />
            <Text color={color.blue.shade3} size="24px" weight="bold">
              Use your ID-CARD
            </Text>
          </Header>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <StyledButton>
              <Icon name="shoppingCart" size={36} color={color.grey.default} />
              <Text>Coop Online</Text>
            </StyledButton>
            <StyledButton onClick={handleOnclick}>
              <Icon name="bankCard" size={36} color={color.grey.default} />
              <Text>Favorite Bank</Text>
            </StyledButton>
            <StyledButton>
              <Icon name="government" size={36} color={color.grey.default} />
              <Text>Skatteverket</Text>
            </StyledButton>
            <StyledButton>
              <Icon name="info" size={36} color={color.grey.default} />
              <Text>CSN</Text>
            </StyledButton>
          </div>
        </>
      )}
    </InteractBlock>
  );
};

export default Action;
