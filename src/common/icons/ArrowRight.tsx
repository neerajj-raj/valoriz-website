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

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = "" }: IconComponentProps) => {
  return (
    <svg className={className} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M16.155 0.833481C16.0791 0.742401 15.985 0.668145 15.8787 0.61545C15.7725 0.562754 15.6564 0.532774 15.538 0.52742C15.4195 0.522067 15.3012 0.541458 15.1906 0.584358C15.0801 0.627257 14.9797 0.692724 14.8958 0.776583C14.8119 0.860443 14.7465 0.960856 14.7036 1.07142C14.6607 1.18198 14.6413 1.30027 14.6466 1.41875C14.652 1.53722 14.682 1.65328 14.7347 1.75953C14.7874 1.86577 14.8616 1.95987 14.9527 2.03583L21.0871 8.1774H0.810714C0.59183 8.18902 0.385739 8.28415 0.234908 8.44319C0.0840779 8.60224 0 8.81308 0 9.03227C0 9.25146 0.0840779 9.46231 0.234908 9.62135C0.385739 9.7804 0.59183 9.87553 0.810714 9.88714H21.0871L14.9431 16.0215C14.7884 16.1835 14.7022 16.3988 14.7022 16.6227C14.7022 16.8466 14.7884 17.0619 14.9431 17.2239C15.0219 17.303 15.1156 17.3657 15.2188 17.4085C15.322 17.4514 15.4326 17.4734 15.5443 17.4734C15.6559 17.4734 15.7665 17.4514 15.8697 17.4085C15.9729 17.3657 16.0666 17.303 16.1454 17.2239L23.7442 9.62503C23.8251 9.54718 23.8895 9.45381 23.9334 9.35051C23.9774 9.24722 24 9.13611 24 9.02386C24 8.9116 23.9774 8.8005 23.9334 8.6972C23.8895 8.5939 23.8251 8.50053 23.7442 8.42268L16.155 0.833481Z"
      />
    </svg>
  );
};

export default ArrowRight;
