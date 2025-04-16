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

const IconMail: React.FC<React.SVGProps<SVGSVGElement>> = ({ className = "" }: IconComponentProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        // eslint-disable-next-line max-len
        d="M17.3333 4.79999H6.66667C5.19688 4.79999 4 5.99687 4 7.46665V16.5333C4 18.0031 5.19688 19.2 6.66667 19.2H17.3333C18.8031 19.2 20 18.0031 20 16.5333V7.46665C20 5.99687 18.8031 4.79999 17.3333 4.79999ZM18.9333 16.5333C18.9333 17.4156 18.2156 18.1333 17.3333 18.1333H6.66667C5.78437 18.1333 5.06667 17.4156 5.06667 16.5333V9.53012L9.75413 12.8792C10.4125 13.3511 11.1885 13.599 12 13.599C12.8104 13.599 13.5864 13.3511 14.2458 12.8792L18.9333 9.53012L18.9333 16.5333ZM18.9333 8.22079L13.624 12.0125C13.1605 12.3427 12.5844 12.525 12.0001 12.525C11.4157 12.525 10.8396 12.3438 10.3761 12.0125L5.06677 8.22079V7.46663C5.06677 6.58433 5.78448 5.86663 6.66677 5.86663H17.3334C18.2157 5.86663 18.9334 6.58433 18.9334 7.46663L18.9333 8.22079Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconMail;
