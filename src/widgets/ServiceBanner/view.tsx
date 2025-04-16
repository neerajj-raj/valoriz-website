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
"use client";
import Image from "next/image";
import { FC, useMemo } from "react";
import useScroll from "@hooks/useScroll";
import { SERVICE_BANNER_HEIGHT } from "@utils/constants";

interface ServiceBannerViewProps {
  serviceBanner: Record<string, any>;
}

const ServiceBannerView: FC<ServiceBannerViewProps> = ({ serviceBanner }) => {
  const { scrollY } = useScroll();
  const { translateY, blurValue, zoomFactor, textOpacity } = useMemo(() => {
    return {
      translateY: Math.max(-scrollY * 0.9, -SERVICE_BANNER_HEIGHT * 20),
      blurValue: Math.min(scrollY / 100, 50),
      zoomFactor: Math.min(1 + scrollY / 3000, 1.2),
      textOpacity: Math.max(1 - scrollY / 600, 0),
    };
  }, [scrollY]);

  return (
    <section className="relative h-[300px] md:h-[500px] bg-black">
      <div
        className="fixed top-0 left-0 w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <Image
          src={serviceBanner?.media}
          width={1920}
          height={1080}
          alt="About Valoriz"
          className="w-full h-full object-cover z-[-1]"
          style={{
            transform: `scale(${zoomFactor})`,
            filter: `blur(${blurValue}px)`,
            transition: "transform 0.1s ease-out, filter 0.1s ease-out",
          }}
        />
        <div className="absolute z-10 inset-0 bg-black/60 flex items-center justify-center">
          <div className="container">
            <div className="lg:w-9/12 text-white max-lg:text-center transition-all" style={{ opacity: textOpacity }}>
              <h1 className="mb-6 uppercase">Services</h1>
              <h3 className="text-h2 xl:text-display2">
                Here&apos;s What <br /> We Can Do For You
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBannerView;
