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
import AboutSectionView from "@widgets/AboutSection/view";
import AboutViewSm from "./components/AboutViewSm";
import useIsMobile from "@hooks/useIsMobile";

interface AboutSectionProps {
  abouts: Record<string, any>;
}

const AboutSection: FC<AboutSectionProps> = ({ abouts }) => {
  const isMobile = useIsMobile();
  return isMobile ? <AboutViewSm abouts={abouts} /> : <AboutSectionView abouts={abouts} />;
};

export default AboutSection;
