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
import NavSm from "./components/NavSm";

interface HeaderViewProps {
  pageType?: string;
  contents: Record<string, any>;
}

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
            <div className="relative group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <Link href="/services" className="hidden xl:flex items-center hover:text-black h-full text-md font-medium px-4">
                Our Services
              </Link>
              <div className="hidden group-hover:flex fixed left-0 w-full text-black bg-white py-10">
                <div className="container">
                  <div className="grid grid-cols-4 gap-5">
                    <div className="pe-10">
                      <h6 className="text-h6">Turning complexity into simplicity, so you can focus on success.</h6>
                      <button className="flex items-center text-sm mt-8">
                        View All Services
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-6">
                      <Link href=" " className="hover:underline">
                        Digital Commerce
                      </Link>
                      <Link href=" " className="hover:underline">
                        AI & ML
                      </Link>
                      <Link href=" " className="hover:underline">
                        Cloud Modernization
                      </Link>
                      <Link href=" " className="hover:underline">
                        Digital Experience
                      </Link>
                    </div>
                    <div className="flex flex-col gap-6">
                      <Link href=" " className="hover:underline">
                        Data Analytics
                      </Link>
                      <Link href=" " className="hover:underline">
                        Enterprise Software
                      </Link>
                      <Link href=" " className="hover:underline">
                        Product Engineering
                      </Link>
                      <Link href=" " className="hover:underline">
                        Digital Process Automation
                      </Link>
                    </div>
                    <div className="flex flex-col gap-6">
                      <Link href=" " className="hover:underline">
                        Mobile Applications
                      </Link>
                      <Link href=" " className="hover:underline">
                        QA & Testing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <Link href="/services" className="hidden xl:flex items-center hover:text-black h-full text-md font-medium px-4">
                Industry
              </Link>
              <div className="hidden group-hover:flex fixed left-0 w-full text-black bg-white py-10">
                <div className="container">
                  <div className="grid grid-cols-4 gap-5">
                    <div className="pe-10">
                      <h6 className="text-h6">Serving Global Leaders with Excellence</h6>
                      <button className="flex items-center text-sm mt-8">
                        View All Industries
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-6">
                      <Link href=" " className="hover:underline">
                        Digital Commerce
                      </Link>
                      <Link href=" " className="hover:underline">
                        AI & ML
                      </Link>
                      <Link href=" " className="hover:underline">
                        Cloud Modernization
                      </Link>
                      <Link href=" " className="hover:underline">
                        Digital Experience
                      </Link>
                    </div>
                    <div className="flex flex-col gap-6">
                      <Link href=" " className="hover:underline">
                        Data Analytics
                      </Link>
                      <Link href=" " className="hover:underline">
                        Enterprise Software
                      </Link>
                      <Link href=" " className="hover:underline">
                        Product Engineering
                      </Link>
                      <Link href=" " className="hover:underline">
                        Digital Process Automation
                      </Link>
                    </div>
                    <div className="flex flex-col gap-6">
                      <Link href=" " className="hover:underline">
                        Mobile Applications
                      </Link>
                      <Link href=" " className="hover:underline">
                        QA & Testing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href=" " className="hidden xl:flex items-center h-full text-md font-medium px-4">
              Case Studies
            </Link>
            <Link href=" " className="hidden xl:flex items-center h-full text-md font-medium px-4">
              Resources
            </Link>
            <Link href="/about" className="hidden xl:flex items-center h-full text-md font-medium px-4">
              About Us
            </Link>
            <Link href=" " className="hidden xl:flex items-center h-full text-md font-medium px-4">
              Careers
            </Link>
            <Link href=" " className={`xl:hidden me-8 ${showMobileNav ? "hidden" : ""}`}>
              <Icon src={CallIcon} size="md" />
            </Link>
            <Link onClick={() => setShowMobileNav((prev) => !prev)} href=" " className="xl:hidden">
              {showMobileNav ? <Icon src={CloseIcon} size="md" variant="black" /> : <Icon src={HamburgerIcon} size="md" />}
            </Link>
          </div>
          <div className="hidden xl:flex items-center">
            <Button variant={isActive ? "secondary" : "outline-light"} size="md" className="flex items-center">
              <Icon src={CallIcon} size="sm" className="me-2" />
              <span>Contact Us</span>
            </Button>
          </div>
          <NavSm open={showMobileNav} onClose={() => setShowMobileNav(false)} />
        </nav>
      </div>
    </header>
  );
};

export default HeaderView;
