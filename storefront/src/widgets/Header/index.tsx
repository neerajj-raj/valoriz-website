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
import HeaderView from "@widgets/Header/view";
import { HeaderContent } from "@lib/types";

interface HeaderProps {
  pageType?: string;
  contents?: Record<string, any>;
}

const Header: FC<HeaderProps> = ({ pageType }) => {
  const headerContent: HeaderContent = {
    logo: { black: "/images/common/valoriz-logo.svg", white: "/images/common/valoriz-logo-white.svg" },
    menuItems: [
      {
        key: "1",
        title: "Our Services",
        link: "/services",
        col1: {
          key: "1.1",
          description: "Turning complexity into simplicity, so you can focus on success",
          viewAll: "View All Services",
        },
        col2: {
          key: "1.2",
          subMenuItems: [
            { title: "Digital Commerce", link: "", key: "1.2.1" },
            { title: "AI & ML", link: "", key: "1.2.2" },
            { title: "Cloud Modernization", link: "", key: "1.2.3" },
            { title: "Digital Experience", link: "", key: "1.2.4" },
          ],
        },
        col3: {
          key: "1.3",
          subMenuItems: [
            { title: "Data Analytics", link: "", key: "1.3.1" },
            { title: "Enterprise Software", link: "", key: "1.3.2" },
            { title: "Product Engineering", link: "", key: "1.3.3" },
            { title: "Digital Process Automation", link: "", key: "1.3.4" },
          ],
        },
        col4: {
          key: "1.4",
          subMenuItems: [
            { title: "Mobile Applications", link: "", key: "1.4.1" },
            { title: "QA & Testing", link: "", key: "1.4.1" },
          ],
        },
      },
      {
        key: "2",
        title: "Industry",
        link: "/industry",
        col1: {
          key: "2.1",
          description: "Serving Global Leaders with Excellence",
          viewAll: "View All Industries",
        },
        col2: {
          key: "2.2",
          subMenuItems: [
            { title: "Data Analytics", link: "", key: "2.3.1" },
            { title: "Enterprise Software", link: "", key: "2.3.1" },
            { title: "Product Engineering", link: "", key: "2.3.1" },
            { title: "Digital Process Automation", link: "", key: "2.3.1" },
          ],
        },
        col3: {
          key: "2.3",
          subMenuItems: [
            { title: "Digital Commerce", link: "", key: "2.2.1" },
            { title: "AI & ML", link: "", key: "2.2.1" },
            { title: "Cloud Modernization", link: "", key: "2.2.1" },
            { title: "Digital Experience", link: "", key: "2.2.1" },
          ],
        },
        col4: {
          key: "2.4",
          subMenuItems: [
            { title: "Mobile Applications", link: "", key: "2.4.1" },
            { title: "QA & Testing", link: "", key: "2.4.1" },
          ],
        },
      },
      {
        key: "3",
        title: "Case Studies",
        link: "/industry",
      },
      {
        key: "4",
        title: "Resources",
        link: "/industry",
      },
      {
        key: "5",
        title: "About Us",
        link: "/about",
      },
      {
        key: "6",
        title: "Careers",
        link: "/industry",
      },
    ],
  };
  return <HeaderView contents={headerContent} pageType={pageType} />;
};

export default Header;
