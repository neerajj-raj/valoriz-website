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
"use client";
import ArrowRight from "@app/common/icons/ArrowRight";
import CallIcon from "@app/common/icons/CallIcon";
import CloseIcon from "@app/common/icons/CloseIcon";
import HamburgerIcon from "@app/common/icons/HamburgerIcon";
import Button from "@core/button/Button";
import Icon from "@core/icon/Icon";
import useScroll from "@hooks/useScroll";
import { pageTypes } from "@utils/constants";
import Image from "next/image";
import Link from "next/link";
import { FC, useMemo, useState } from "react";
import { hasArrayElements } from "@utils/commonUtils";
import { HeaderContent, SubMenuItems } from "@lib/types";
import NavSm from "./components/NavSm";

interface HeaderViewProps {
  pageType?: string;
  contents: HeaderContent;
}

interface DescrpitionViewProps {
  description?: string;
  viewAll?: string;
}
interface ColumnViewProps {
  subMenuItems?: SubMenuItems[];
}
const ColumnView: FC<ColumnViewProps> = ({ subMenuItems }) => {
  return (
    subMenuItems &&
    hasArrayElements(subMenuItems) && (
      <div className="flex flex-col gap-6">
        {subMenuItems?.map((item, i) => (
          <Link href={item?.link ?? ""} className="hover:underline" key={`${item?.key}-${i + 1}`}>
            {item?.title}
          </Link>
        ))}
      </div>
    )
  );
};
const DescrpitionView: FC<DescrpitionViewProps> = ({ description, viewAll }) => (
  <div className="pe-10">
    <h6 className="text-h6">{description}</h6>
    <button className="flex items-center text-sm mt-8">
      {viewAll ?? ""}
      <Icon src={ArrowRight} size="sm" className="ms-2" />
    </button>
  </div>
);

const HeaderView: FC<HeaderViewProps> = ({ contents, pageType }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [hovered, setHovered] = useState(false);

  const { scrolled } = useScroll();
  const isActive = useMemo(() => scrolled || pageType === pageTypes.CONTACT_US || hovered, [hovered, pageType, scrolled]);

  return (
    <header className={`fixed top-0 left-0 z-[1040] w-full h-[76px] ${showMobileNav || isActive ? "bg-white" : "bg-transparent"}`} id="global-header">
      <div className="container h-full">
        <nav className="flex justify-between h-full">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={showMobileNav || isActive ? contents?.logo?.black : contents?.logo?.white}
                className="w-auto h-[34px] lg:h-[38px]"
                alt="Brand Logo"
                width={160}
                height={76}
              />
            </Link>
          </div>
          <div className={`flex justify-end max-xl:items-center ${isActive ? "text-gray-dark" : "text-white"}`}>
            {hasArrayElements(contents?.menuItems) &&
              contents?.menuItems?.map((item) => {
                const { title, link, col1, col2, col3, col4, key } = item;
                return col1 ? (
                  <div className="relative group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} key={key}>
                    <Link href={link ?? ""} className="hidden xl:flex items-center hover:text-black h-full text-md font-medium px-4">
                      {title}
                    </Link>
                    <div className="hidden group-hover:flex fixed left-0 w-full text-black bg-white py-10">
                      <div className="container">
                        <div className="grid grid-cols-4 gap-5">
                          {[col1, col2, col3, col4].map((each) =>
                            each?.description ? (
                              <DescrpitionView description={each?.description} viewAll={each?.viewAll} key={each?.key} />
                            ) : (
                              <ColumnView subMenuItems={each?.subMenuItems} key={each?.key} />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={link ?? ""} className="hidden xl:flex items-center h-full text-md font-medium px-4" key={key}>
                    {title}
                  </Link>
                );
              })}
            <Link href=" " className={`xl:hidden me-8 ${showMobileNav ? "hidden" : ""}`}>
              <Icon src={CallIcon} size="md" />
            </Link>
            <Link onClick={() => setShowMobileNav((prev) => !prev)} href=" " className="xl:hidden">
              {showMobileNav ? <Icon src={CloseIcon} size="md" variant="black" /> : <Icon src={HamburgerIcon} size="md" />}
            </Link>
          </div>
          <div className="hidden xl:flex items-center">
            <Link href="/contact">
              <Button variant={isActive ? "secondary" : "outline-light"} size="md" className="flex items-center">
                <Icon src={CallIcon} size="sm" className="me-2" />
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>
          <NavSm open={showMobileNav} onClose={() => setShowMobileNav(false)} menuItems={contents?.menuItems} />
        </nav>
      </div>
    </header>
  );
};

export default HeaderView;
