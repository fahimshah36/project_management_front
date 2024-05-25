import {Typography} from "antd";
import React from "react";

const Header = ({title}) => {
  return (
    <Typography.Title
      level={1}
      style={{
        color: "white",
        textAlign: "center",
      }}
    >
      {title}
    </Typography.Title>
  );
};

export default Header;
