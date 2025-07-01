import React from "react";
import Text from "./Text";
import color from "../assets/colors";
import styled from "styled-components";
import Icon from "./Icon";
const StatusBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  border-radius: 8px;
  padding: 16px;
  border-style: solid;
  border-color: ${({ status }) =>
    status === "online"
      ? color.green.default
      : status === "loading"
      ? color.orange.default
      : status === "offline"
      ? color.blue.default
      : color.black.default};
  @media (max-width: 450px) {
    border-radius: 0;
    margin-bottom: 0;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Status = ({ status = "offline" }) => {
  const statusText =
    status === "loading"
      ? "loading"
      : status === "online"
      ? "online"
      : status === "offline"
      ? "offline"
      : "unknown";

  return (
    <StatusBlock status={status}>
      <Header>
        {status === "online" && (
          <Icon name="online" color={color.green.default} />
        )}
        {status === "loading" && (
          <Icon name="loading" color={color.orange.default} />
        )}
        {status === "offline" && (
          <Icon name="offline" color={color.blue.default} />
        )}
        <Text color={color.black.default} size="24px">
          Status
        </Text>
      </Header>
      <Text color={color.black.default} size="16px">
        The service is currently {statusText}.
      </Text>
    </StatusBlock>
  );
};

export default Status;
