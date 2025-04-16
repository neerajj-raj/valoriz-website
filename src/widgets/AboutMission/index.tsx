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
import AboutMissionView from "@widgets/AboutMission/view";

interface AboutMissionProps {
  contents: Record<string, any>;
}

const AboutMission: FC<AboutMissionProps> = ({ contents }) => {
  return <AboutMissionView contents={contents} />;
};

export default AboutMission;
