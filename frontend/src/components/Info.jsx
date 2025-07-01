import React from "react";
import Text from "./Text";
import color from "../assets/colors";
import styled from "styled-components";
import Icon from "./Icon";

const InfoPoint = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  border-radius: 8px;
  padding: 16px;
  gap: 16px;
  @media (max-width: 450px) {
    border-radius: 0;
  }
`;

const Info = () => {
  return (
    <InfoBlock>
      <InfoPoint>
        <Icon name="info" size="24px" color={color.blue.shade3} />
        <Text color={color.blue.shade3} size="24px" weight="bold">
          How to use
        </Text>
      </InfoPoint>
      <InfoPoint>
        <Text color={color.black.default} size="16px">
          Step one - do something
        </Text>
      </InfoPoint>
      <InfoPoint>
        <Text color={color.black.default} size="16px">
          When something happens
        </Text>
      </InfoPoint>
      <InfoPoint>
        <Text color={color.black.default} size="16px">
          Some text here
        </Text>
      </InfoPoint>
    </InfoBlock>
  );
};

export default Info;
