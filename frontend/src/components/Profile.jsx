import React from "react";
import Text from "./Text";
import styled from "styled-components";
import color from "../assets/colors";
import Icon from "./Icon";

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
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
        <Icon name="user" color={color.black.default} />
        <Text color={color.black.default} size="24px">
          User Profile
        </Text>
      </Header>
      <Text size="16px" color={color.black.default}>
        You are signed in as <b>@username38734</b>
      </Text>
      <Text size="16px" color={color.blue.default}>
        Sign out
      </Text>
    </ProfileBlock>
  );
};

export default Profile;
