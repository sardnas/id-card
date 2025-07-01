import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import color from "../assets/colors";
import Text from "./Text";
import Icon from "./Icon";

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
//shoppingCart: FaShoppingCart,
// bankCard: FaMoneyCheck,
// government: FaBuilding,
const Action = () => {
  return (
    <InteractBlock>
      <Header>
        <Icon name="idCard" color={color.blue.shade3} />
        <Text color={color.blue.shade3} size="24px" weight="bold">
          Use your ID-CARD
        </Text>
      </Header>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <StyledButton>
          <Icon name="shoppingCart" size={36} color={color.grey.default} />
          <Text>Authenticate to web-store</Text>
        </StyledButton>
        <StyledButton>
          <Icon name="bankCard" size={36} color={color.grey.default} />
          <Text>Authenticate to bank</Text>
        </StyledButton>
        <StyledButton>
          <Icon name="government" size={36} color={color.grey.default} />
          <Text>Authenticate to government service</Text>
        </StyledButton>
        <StyledButton>
          <Icon name="shoppingCart" size={36} color={color.grey.default} />
          <Text>Authenticate to other web-store</Text>
        </StyledButton>
      </div>
    </InteractBlock>
  );
};

export default Action;
