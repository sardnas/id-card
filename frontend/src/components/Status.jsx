import React, { useState } from "react";
import Text from "./Text";
import color from "../assets/colors";
import styled from "styled-components";
import Icon from "./Icon";
import { Ping } from "../Api";

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

const StyledButton = styled.button`
  background-color: ${color.blue.default};
  border: none;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${color.blue.shade3};
  }
`;

const Status = () => {
  const [status, setStatus] = useState("offline");
  const [message, setMessage] = useState("Not checked yet");

  const handlePing = async () => {
    setStatus("loading");
    try {
      const response = await Ping();
      if (response.ok) {
        const data = await response.text();
        setMessage("Ping successful: " + data);
        setStatus("online");
      } else {
        setMessage("Ping failed: " + response.status);
        setStatus("offline");
      }
    } catch (error) {
      setMessage("Ping error: " + error.message);
      setStatus("offline");
    }
  };
  console.log("Message:", message);

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
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
            The id-provider is currently {statusText}.
          </Text>
        </div>
        <StyledButton onClick={handlePing} disabled={status === "loading"}>
          <Icon name="sync" color={color.white.default} size="24px" />
        </StyledButton>
      </div>
    </StatusBlock>
  );
};

export default Status;
