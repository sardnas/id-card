import React from "react";

const Text = ({
  children,
  color = "#000",
  size = "16px",
  weight = "normal",
}) => {
  return (
    <div
      style={{
        color,
        fontSize: size,
        fontWeight: weight,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {children}
    </div>
  );
};

export default Text;
