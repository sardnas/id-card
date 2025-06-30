import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCommentDots,
  FaWifi,
  FaIdCard,
  FaUser,
} from "react-icons/fa";
import { MdInfo, MdWarning, MdWifiOff } from "react-icons/md";

const icons = {
  check: FaCheckCircle,
  error: FaTimesCircle,
  info: MdInfo,
  warning: MdWarning,
  loading: FaCommentDots,
  offline: MdWifiOff,
  online: FaWifi,
  idCard: FaIdCard,
  user: FaUser,
};

const Icon = ({ name, size = 24, color = "#000" }) => {
  const Component = icons[name];

  if (!Component) return null;

  return <Component size={size} color={color} />;
};

export default Icon;
