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

const HamburgerIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = "" }: IconComponentProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <clipPath id="clip-ham">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
      <g id="ham" clipPath="url(#clip-ham)">
        <path
          fill="currentColor"
          id="Vector_1_"
          data-name="Vector (1)"
          d="M.316,1.356A.858.858,0,0,1,1.172.5H23.418a.856.856,0,1,1,0,1.711H1.172A.858.858,0,0,1,.316,1.356ZM23.4,8.2H1.155a.856.856,0,1,0,0,1.711H23.4a.856.856,0,1,0,0-1.711Zm-.026,7.7H1.129a.856.856,0,1,0,0,1.711H23.375a.856.856,0,1,0,0-1.711Z"
          transform="translate(-0.273 2.944)"
        />
      </g>
    </svg>
  );
};

export default HamburgerIcon;
