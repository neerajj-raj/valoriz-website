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

const ChevronUp: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = "" }: IconComponentProps) => {
  return (
    <svg className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <clipPath id="clip-chev">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
      <g id="chev" clipPath="url(#clip-chev)">
        <path
          id="Vector_2_"
          data-name="Vector (2)"
          // eslint-disable-next-line max-len
          d="M23.93.748a.849.849,0,0,0-1.2,0L12.187,11.313,1.623.748a.848.848,0,0,0-1.2,1.2L11.567,13.091a.828.828,0,0,0,.6.248.863.863,0,0,0,.6-.248L23.91,1.947A.831.831,0,0,0,23.93.748Z"
          transform="translate(24.176 19.339) rotate(180)"
        />
      </g>
    </svg>
  );
};

export default ChevronUp;
