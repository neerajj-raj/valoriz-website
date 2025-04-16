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
import HeroBannerView from "@widgets/HeroBanners/view";

interface HeroBannersProps {
  contents: Record<string, any>;
}

const HeroBanners: FC<HeroBannersProps> = ({ contents }) => {
  return <HeroBannerView contents={contents} />;
};

export default HeroBanners;
