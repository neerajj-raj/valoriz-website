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
import GoodHandsView from "@widgets/GoodHands/view";

interface GoodHandsProps {
  goodHands: Record<string, any>;
}

const GoodHands: FC<GoodHandsProps> = ({ goodHands }) => {
  return <GoodHandsView goodHands={goodHands} />;
};

export default GoodHands;
