/**
 * Copyright(c) 2025 Valoriz Digital Pvt. Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * contract agreement you entered into with Valoriz.
 *
 * AppHeader
 *
 * @author Valoriz UI Team
 *
 */

import { IconProps } from "@lib/types";
import React from "react";

const sizeClasses: Record<string, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

const variantClasses: Record<string, string> = {
  primary: "text-primary",
  white: "text-white",
  black: "text-black",
  gray400: "text-gray-400",
};

const Icon: React.FC<IconProps> = ({ src: SvgIcon, variant, size = "md", className }) => {
  const classes = [variant ? variantClasses[variant] : "", size ? sizeClasses[size] : "", className ?? ""].filter(Boolean).join(" ");

  return <SvgIcon className={classes} />;
};

export default Icon;
