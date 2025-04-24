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
import { MenuItems, SubMenuItems } from "@lib/types";
import { hasArrayElements } from "@utils/commonUtils";
import Link from "next/link";
import React, { FC, useCallback, useEffect, useState } from "react";

interface NavSmProps {
  onClose: () => void;
  open: boolean;
  menuItems: MenuItems[];
}

const NavSm: FC<NavSmProps> = ({ open, onClose, menuItems }) => {
  const [openNavBar, setOpenNavBar] = useState<number | null>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  const toggleCollapse = (index: number) => {
    if (openNavBar === index) {
      setOpenNavBar(null);
      return;
    }
    setOpenNavBar(index);
  };

  const getSubMenuItems = useCallback((item: MenuItems): SubMenuItems[] => {
    const { col1, col2, col3, col4 } = item || {};
    return [col1, col2, col3, col4].flatMap((each) => each?.subMenuItems ?? []);
  }, []);

  return (
    <>
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
              {hasArrayElements(menuItems) &&
                menuItems?.map((item, index) => {
                  const subMenuItems = getSubMenuItems(item);
                  const isActive = openNavBar === index;
                  return hasArrayElements(subMenuItems) ? (
                    <React.Fragment key={item?.key}>
                      <div className="flex items-center justify-between border-t py-4 px-6" onClick={() => toggleCollapse(index)}>
                        <h3 className={`text-base md:text-md font-bold ${isActive ? "text-[#2D5F52]" : "text-black"}`}>{item?.title}</h3>
                        <div>{isActive ? <Icon src={ChevronUp} size="sm" /> : <Icon src={ChevronDown} size="sm" />}</div>
                      </div>
                      <div className={`overflow-hidden bg-gray-100 transition-all duration-300 ${isActive ? "max-h-screen border-t" : "max-h-0"}`}>
                        <div className="flex flex-col">
                          {subMenuItems?.map((subMenu, i) => (
                            <Link href={subMenu?.link ?? ""} className="border-b last:border-b-0 px-8 py-4" key={`${subMenu?.key}-${i + 1}`}>
                              {subMenu?.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    <Link href={item?.link ?? ""} className="flex border-t py-4 px-6" key={item?.key}>
                      <h3 className="text-base md:text-md font-bold">{item?.title}</h3>
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className="mt-auto p-5">
            <Link href="/contact">
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSm;
