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

import ChevronDown from "@app/common/icons/ChevronDown";
import ChevronUp from "@app/common/icons/ChevronUp";
import Button from "@core/button/Button";
import Icon from "@core/icon/Icon";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface NavSmProps {
  onClose: () => void;
  open: boolean;
}

const NavSm: FC<NavSmProps> = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const toggleCollapse2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      {/* Background overlay */}
      <div
        onClick={onClose}
        className={`fixed left-0 top-[76px] z-10 h-[calc(100vh-76px)] w-full bg-black/60 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed left-0 top-[76px] z-20 flex h-[calc(100vh-76px)] w-full max-w-[440px] flex-col bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-auto">
          <div className="mt-4">
            <div className="font-medium">
              <div className="flex items-center justify-between border-t py-4 px-6" onClick={toggleCollapse}>
                <h3 className={`text-base md:text-md font-bold ${isOpen ? "text-[#2D5F52]" : "text-black"}`}>Our Services</h3>
                <div>{isOpen ? <Icon src={ChevronUp} size="sm" /> : <Icon src={ChevronDown} size="sm" />}</div>
              </div>
              <div className={`overflow-hidden bg-gray-100 transition-all duration-300 ${isOpen ? "max-h-screen border-t" : "max-h-0"}`}>
                <div className="flex flex-col">
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    Digital Commerce
                  </Link>
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    Data Analytics
                  </Link>
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    Mobile Applications
                  </Link>
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    AI & ML
                  </Link>
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    Enterprise Software
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between border-t py-4 px-6" onClick={toggleCollapse2}>
                <h3 className="text-base md:text-md font-bold">Industry</h3>
                <div>{isOpen ? <Icon src={ChevronUp} size="sm" /> : <Icon src={ChevronDown} size="sm" />}</div>
              </div>
              <div className={`overflow-hidden bg-gray-100 transition-all duration-300 ${isOpen2 ? "max-h-screen border-t" : "max-h-0"}`}>
                <div className="flex flex-col">
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    Digital Commerce
                  </Link>
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    Data Analytics
                  </Link>
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    Mobile Applications
                  </Link>
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    AI & ML
                  </Link>
                  <Link href=" " className="border-b last:border-b-0 px-8 py-4">
                    Enterprise Software
                  </Link>
                </div>
              </div>
              <Link href=" " className="flex border-t py-4 px-6">
                <h3 className="text-base md:text-md font-bold">Case studies</h3>
              </Link>
              <Link href=" " className="flex border-t py-4 px-6">
                <h3 className="text-base md:text-md font-bold">Resources</h3>
              </Link>
              <Link href=" " className="flex border-t py-4 px-6">
                <h3 className="text-base md:text-md font-bold">About Us</h3>
              </Link>
              <Link href=" " className="flex border-t py-4 px-6">
                <h3 className="text-base md:text-md font-bold">Careers</h3>
              </Link>
            </div>
          </div>
          <div className="mt-auto p-5">
            <Button className="w-full">Contact Us</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSm;
