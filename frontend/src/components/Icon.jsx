import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCommentDots,
  FaWifi,
  FaIdCard,
  FaUser,
  FaSyncAlt,
  FaShoppingCart,
  FaBuilding,
} from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { MdInfo, MdWarning, MdWifiOff } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";

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
  qr: BsQrCode,
  sync: FaSyncAlt,
  shoppingCart: FaShoppingCart,
  bankCard: BiSolidBank,
  government: FaBuilding,
};

const Icon = ({ name, size = 24, color = "#000" }) => {
  const Component = icons[name];

  if (!Component) return null;

  return <Component size={size} color={color} />;
};

export default Icon;
