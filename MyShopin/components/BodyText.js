import React from "react";
import AppStyles from "../constants/AppStyles";
import { Text } from "react-native";

const { textBody } = AppStyles;
const BodyText = ({ children, style }) => (
  <Text style={{ ...textBody, ...style }}>{children}</Text>
);
export default BodyText;
