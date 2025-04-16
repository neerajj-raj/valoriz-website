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
import Image from "next/image";
import { aboutBannerStyle } from "@utils/constants";

interface RoundedBannerProps {
  contents: Record<string, any>;
  size: "lg" | "sm";
}

const RoundedBanner: FC<RoundedBannerProps> = ({ contents, size }) => {
  return contents?.roundedBanner?.map((content: Record<string, any>, index: number) => (
    <div className={aboutBannerStyle[size][index]} key={`RB_${content?.alt}_${size}`}>
      <Image src={content?.media} width={150} height={150} alt={content?.alt} className="w-full" />
    </div>
  ));
};

export default RoundedBanner;
