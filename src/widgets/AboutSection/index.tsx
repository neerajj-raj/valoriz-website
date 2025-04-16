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
import AboutSectionView from "@widgets/AboutSection/view";

interface AboutSectionProps {
  abouts: Record<string, any>;
}

const AboutSection: FC<AboutSectionProps> = ({ abouts }) => {
  return <AboutSectionView abouts={abouts} />;
};

export default AboutSection;
