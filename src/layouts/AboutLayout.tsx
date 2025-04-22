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
import Footer from "@widgets/Footer";
import OurTeams from "@widgets/OurTeams";
import LazyWrapper from "@components/LazyWrapper";
import LeaderShips from "@widgets/LeaderShips";

interface AboutLayoutProps {
  aboutContents: Record<string, any>;
}

const AboutLayout: FC<AboutLayoutProps> = ({ aboutContents }) => {
  return (
    <>
      <Header />
      <AboutBanner banners={aboutContents?.banners} />
      <AboutMission ourMissions={aboutContents?.ourMissions} />
      <LazyWrapper>
        <AboutHistory contents={aboutContents?.historyInfo} />
        <OurTeams ourTeams={aboutContents?.ourTeams} />
        <LeaderShips leaderShips={aboutContents?.leaderShips} />
        {/* <AboutGoals contents={aboutContents?.goals} /> */}
      </LazyWrapper>
      <Footer />
    </>
  );
};

export default AboutLayout;
