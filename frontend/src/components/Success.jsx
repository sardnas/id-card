import React from "react";
import Icon from "./Icon";
import color from "../assets/colors";
import Text from "./Text";
import Button from "./Button";

const Success = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <Icon name="check" size="72px" color={color.green.default} />
      </div>
      <Text size="36px">Electronic ID Recognized</Text>
      <div style={{ width: "75%", marginTop: "16px", marginBottom: "32px" }}>
        <Text>
          The electronic ID has been recognized. You can now go back to the
          service you wanted to use.
        </Text>
      </div>
      <Button label="Go back" onClick={() => window.location.reload()} />
    </div>
  );
};

export default Success;
