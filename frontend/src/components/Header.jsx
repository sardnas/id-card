import React from "react";
import Icon from "./Icon";
import Text from "./Text";
import color from "../assets/colors";

const Header = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px",
        backgroundColor: color.blue.default,
        height: "100px",
      }}
    >
      <Icon name="idCard" size="48px" color={color.white.default} />
      <Text size="48px" weight="bold" color={color.white.default}>
        ID-CARD
      </Text>
    </div>
  );
};

export default Header;
