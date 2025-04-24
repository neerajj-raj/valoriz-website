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
import { CommonProps } from "@lib/types";

interface AboutMissionProps {
  ourMissions: CommonProps;
}

const AboutMission: FC<AboutMissionProps> = ({ ourMissions }) => {
  return <AboutMissionView ourMissions={ourMissions} />;
};

export default AboutMission;
