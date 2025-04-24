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

const ChevronRight: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = "" }: IconComponentProps) => {
  return (
    <svg className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <clipPath id="clip-chevR">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
      <g id="chevR" clipPath="url(#clip-chevR)">
        <path
          id="Vector"
          // eslint-disable-next-line max-len
          d="M.872,24.3a.681.681,0,0,0,.48.2.658.658,0,0,0,.48-.2L13.142,12.988a.674.674,0,0,0,0-.959L1.831.715a.679.679,0,1,0-.959.959L11.7,12.508.872,23.339a.676.676,0,0,0,0,.959Z"
          transform="translate(5.343 -0.5)"
        />
      </g>
    </svg>
  );
};

export default ChevronRight;
