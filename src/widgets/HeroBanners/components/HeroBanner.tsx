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

import { FC, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@core/icon/Icon";
import Button from "@core/button/Button";
import ArrowRight from "@app/common/icons/ArrowRight";
import { mediaTypes } from "@utils/constants";

interface HeroBannerProps {
  media: Record<string, any>;
}

const HeroBanner: FC<HeroBannerProps> = ({ media }) => {
  const isImageMedia = useMemo(() => media?.type === mediaTypes.IMAGE, [media?.type]);
  return (
    <div className="w-full flex-none basis-[var(--slide-size)] relative">
      <span className="content-[''] absolute left-0 top-0 w-full h-full bg-black/50 z-10" />
      <Link href=" " className={isImageMedia ? "flex h-full" : "flex max-lg:aspect-[1.54/1] h-full"}>
        {isImageMedia ? (
          <>
            <Image src={media?.lg} width={1920} height={1080} alt={`Hero Banner_${media?.key}`} className="w-full object-cover hidden lg:block" />
            <Image src={media?.sm} width={800} height={1585} alt={`Hero Banner_sm_${media?.key}`} className="w-full object-cover lg:hidden" />
          </>
        ) : (
          <video src={media?.lg} className="w-full h-full object-cover" autoPlay loop muted playsInline />
        )}
      </Link>
      {}
      <div className="container absolute lg:flex mx-auto bottom-[128px] xl:bottom-[104px] left-1/2 -translate-x-1/2 lg:bottom-20 pointer-events-none z-20">
        <div className="text-white pointer-events-auto">
          <h4 className="text-h6 xl:text-h4 mb-2">Building the next era of</h4>
          <h3 className="text-h3 xl:text-h1 xl:text-display2 text-primary-light leading-tight">
            Digital <br />
            Transformation
          </h3>
          <h4 className="text-md xl:text-h6 mt-4">Where Collaboration Drives Innovation and Growth.</h4>
          <Button variant="primary" className="flex items-center mt-16">
            <span>Book a Consultation Call</span>
            <Icon src={ArrowRight} size="sm" className="ms-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
