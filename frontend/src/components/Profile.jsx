import React from "react";
import Text from "./Text";
import styled from "styled-components";
import color from "../assets/colors";
import Icon from "./Icon";

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.blue.shade3};
  border-radius: 8px;
  padding: 16px;
  gap: 8px;
  @media (max-width: 450px) {
    border-radius: 0;
    margin-left: 0;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const Profile = () => {
  return (
    <ProfileBlock>
      <Header>
        <Icon name="user" color={color.white.default} />
        <Text color={color.white.default} size="24px">
          User Profile
        </Text>
      </Header>
      <div
        style={{
          borderTop: `1px solid ${color.white.default}`,
          borderBottom: `1px solid ${color.white.default}`,
          paddingBottom: "8px",
          paddingTop: "8px",
        }}
      >
        <Text size="16px" color={color.white.default}>
          <b>Name:</b> John Doe
        </Text>
      </div>
      <div
        style={{
          borderBottom: `1px solid ${color.white.default}`,
          paddingBottom: "8px",
        }}
      >
        <Text size="16px" color={color.white.default}>
          <b>Personal ID:</b> 19871224-1234
        </Text>
      </div>
      <div
        style={{
          borderBottom: `1px solid ${color.white.default}`,
          paddingBottom: "8px",
        }}
      >
        <Text size="16px" color={color.white.default}>
          <b>ID number:</b> 1234 5678 9764 3456
        </Text>
      </div>
      <div
        style={{
          paddingBottom: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <div
          style={{
            paddingBottom: "8px",
            backgroundColor: color.white.default,
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <Icon name="qr" color={color.black.default} size="72px" />
        </div>
      </div>
    </ProfileBlock>
  );
};

export default Profile;
