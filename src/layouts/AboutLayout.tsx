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
import Header from "@widgets/Header";
import AboutBanner from "@widgets/AboutBanner";
import AboutHistory from "@widgets/AboutHistory";
import AboutMission from "@widgets/AboutMission";
import AboutGoals from "@widgets/AboutGoals";
import Footer from "@widgets/Footer";

interface AboutLayoutProps {
  aboutContents: Record<string, any>;
}

const AboutLayout: FC<AboutLayoutProps> = ({ aboutContents }) => {
  return (
    <>
      <Header />
      <AboutBanner contents={aboutContents?.banners} />
      <AboutHistory contents={aboutContents?.historyInfo} />
      <AboutMission contents={aboutContents?.mission} />
      <AboutGoals contents={aboutContents?.goals} />
      <Footer />
    </>
  );
};

export default AboutLayout;
