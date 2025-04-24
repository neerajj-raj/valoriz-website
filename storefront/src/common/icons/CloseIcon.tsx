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

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = "" }: IconComponentProps) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        // eslint-disable-next-line max-len
        d="M13.8261 12L23.5652 2.21739C24.087 1.69565 24.087 0.869565 23.5652 0.391304C23.0435 -0.130435 22.2174 -0.130435 21.7391 0.391304L12 10.1739L2.21739 0.391304C1.69565 -0.130435 0.869565 -0.130435 0.391304 0.391304C-0.130435 0.913043 -0.130435 1.73913 0.391304 2.21739L10.1304 12L0.391304 21.7826C-0.130435 22.3043 -0.130435 23.1304 0.391304 23.6087C0.652174 23.8696 1 24 1.30435 24C1.6087 24 1.95652 23.8696 2.21739 23.6087L12 13.8261L21.7826 23.6087C22.0435 23.8696 22.3913 24 22.6957 24C23 24 23.3478 23.8696 23.6087 23.6087C24.1304 23.087 24.1304 22.2609 23.6087 21.7826L13.8261 12Z"
      />
    </svg>
  );
};

export default CloseIcon;
