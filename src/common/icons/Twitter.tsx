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

const Twitter: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = "" }: IconComponentProps) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        // eslint-disable-next-line max-len
        d="M14.8101 10.2407L23.7386 0.0771484H21.6236L13.8677 8.9002L7.67763 0.0771484H0.536377L9.89897 13.4204L0.536377 24.0771H2.65141L10.8366 14.7577L17.3751 24.0771H24.5164M3.41478 1.63905H6.66407L21.622 22.592H18.3719"
        fill="currentColor"
      />
    </svg>
  );
};

export default Twitter;
