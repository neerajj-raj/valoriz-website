/*
 * Copyright(c) 2025 Valoriz.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Magrabi ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Magrabi.
 *
 *
 * @author Neeraj
 */

import { FC } from "react";
import FooterView from "@widgets/Footer/view";
import LinkedIn from "@app/common/icons/LinkedIn";
import Youtube from "@app/common/icons/Youtube";
import Instagram from "@app/common/icons/Instagram";
import Facebook from "@app/common/icons/Facebook";
import Twitter from "@app/common/icons/Twitter";
import Threads from "@app/common/icons/Threads";

interface FooterProps {
  contents?: Record<string, any>;
}

const Footer: FC<FooterProps> = ({}) => {
  const footerContents = {
    copyRights: {
      socialMedias: [
        { link: "https://www.linkedin.com/company/valoriz-digital/", logo: LinkedIn, name: "LinkedIn" },
        { link: "https://www.youtube.com/@valorizdigital", logo: Youtube, name: "Youtube" },
        { link: "https://www.instagram.com/explore/locations/799885436715019/valoriz-digital/#", logo: Instagram, name: "Instagram" },
        { link: "https://www.facebook.com/valorizdigital", logo: Facebook, name: "Facebook" },
        { link: "https://x.com/valorizdigital", logo: Twitter, name: "Twitter" },
        { link: "https://www.threads.net/@valorizdigital", logo: Threads, name: "Threads" },
      ],
    },
  };
  return <FooterView footerContents={footerContents} />;
};

export default Footer;
