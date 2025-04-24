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

const Youtube: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = "" }: IconComponentProps) => {
  return (
    <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M33.8246 3.82478C33.4328 2.34965 32.2786 1.18792 30.8129 0.793666C28.1564 0.0771484 17.504 0.0771484 17.504 0.0771484C17.504 0.0771484 6.8518 0.0771484 4.19534 0.793666C2.72964 1.18792 1.57532 2.34965 1.18367 3.82478C0.471802 6.49866 0.471802 12.0772 0.471802 12.0772C0.471802 12.0772 0.471802 17.6558 1.18367 20.3297C1.57532 21.8048 2.72964 22.9664 4.19534 23.3608C6.8518 24.0771 17.504 24.0771 17.504 24.0771C17.504 24.0771 28.1564 24.0771 30.8129 23.3608C32.2786 22.9664 33.4328 21.8046 33.8246 20.3298C34.5364 17.6556 34.5364 12.0772 34.5364 12.0772C34.5364 12.0772 34.5364 6.49866 33.8246 3.82478Z"
        fill="currentColor"
      />
      <path d="M14.0202 17.1421L22.9235 12.0774L14.0202 7.01224V17.1421Z" fill="black" />
    </svg>
  );
};

export default Youtube;
