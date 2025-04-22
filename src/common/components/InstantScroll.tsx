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

import { FC } from "react";
import ChevronUp from "../icons/ChevronUp";
import Button from "@core/button/Button";
import Icon from "@core/icon/Icon";

interface InstantScrollProps {
  text?: string;
}

const InstantScroll: FC<InstantScrollProps> = ({ text }) => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const scrollStep = -window.scrollY / 50;
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 100);
    }
  };
  return (
    <Button className="text-base bg-tranparent p-0" onClick={scrollToTop}>
      <Icon className="mx-auto" src={ChevronUp} />
      {text ?? "Scroll to Top"}
    </Button>
  );
};

export default InstantScroll;
