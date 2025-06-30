import React from "react";
import Icon from "./Icon";
import Text from "./Text";
import color from "../assets/colors";

const Header = () => {
  return (
    <div
      style={{
        marginTop: "24px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Icon name="idCard" size="48px" color={color.black.default} />
      <Text size="48px" weight="bold" color={color.black.default}>
        ID-CARD
      </Text>
    </div>
  );
};

export default Header;
