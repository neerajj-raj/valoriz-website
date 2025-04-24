/* eslint-disable max-len */
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

import { IconComponentProps } from "@lib/types";
import React from "react";

const Facebook: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = "" }: IconComponentProps) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M24.5364 12.0772C24.5364 5.44973 19.1638 0.0771484 12.5364 0.0771484C5.90896 0.0771484 0.536377 5.44973 0.536377 12.0772C0.536377 18.0667 4.9246 23.0311 10.6614 23.9314V15.5459H7.61451V12.0772H10.6614V9.43341C10.6614 6.42589 12.4529 4.76466 15.194 4.76466C16.5069 4.76466 17.8801 4.99902 17.8801 4.99902V7.95215H16.367C14.8763 7.95215 14.4114 8.87716 14.4114 9.82615V12.0772H17.7395L17.2075 15.5459H14.4114V23.9314C20.1482 23.0311 24.5364 18.0667 24.5364 12.0772Z"
        fill="currentColor"
      />
      <path
        d="M17.2075 15.5459L17.7395 12.0772H14.4114V9.82615C14.4114 8.87716 14.8763 7.95215 16.367 7.95215H17.8801V4.99902C17.8801 4.99902 16.5069 4.76466 15.194 4.76466C12.4529 4.76466 10.6614 6.42589 10.6614 9.43341V12.0772H7.61451V15.5459H10.6614V23.9314C11.2816 24.0286 11.9085 24.0773 12.5364 24.0771C13.1743 24.0771 13.8004 24.0272 14.4114 23.9314V15.5459H17.2075Z"
        fill="black"
      />
    </svg>
  );
};

export default Facebook;
