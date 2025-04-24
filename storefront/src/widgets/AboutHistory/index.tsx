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
import AboutHistoryView from "@widgets/AboutHistory/view";
import { hasArrayElements } from "@utils/commonUtils";
import { HistoryInfo } from "@lib/types";

interface AboutHistoryProps {
  historyInfo: HistoryInfo;
}

const AboutHistory: FC<AboutHistoryProps> = ({ historyInfo }) => {
  return hasArrayElements(historyInfo?.histories) && <AboutHistoryView historyInfo={historyInfo} />;
};

export default AboutHistory;
