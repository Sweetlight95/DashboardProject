import React from "react";
import { LikeOutlined } from "@ant-design/icons";

export default (props) => (
  <div>
    <LikeOutlined /> {props.value}
  </div>
);