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
import Icon from "@core/icon/Icon";
import { FC, useEffect, useMemo, useState } from "react";
import ArrowRight from "@app/common/icons/ArrowRight";
import useEmblaCarousel from "embla-carousel-react";
import { getCircumference, hasArrayElements } from "@utils/commonUtils";
import HeroBanner from "@widgets/HeroBanners/components/HeroBanner";
import SliderIndication from "./components/SliderIndication";

interface HeroBannersViewProps {
  contents: Record<string, any>;
}

const HeroBannerView: FC<HeroBannersViewProps> = ({ contents }) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const circumference = useMemo(() => getCircumference(), []);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  const handleSliderClick = (index: number) => {
    embla?.scrollTo(index);
  };

  return (
    <section className="relative w-[var(--slide-size)] h-screen bg-secondary" id="hero-banner">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom h-full">
          {hasArrayElements(contents?.medias) && contents?.medias?.map((media: Record<string, any>) => <HeroBanner key={media?.key} media={media} />)}
        </div>
      </div>
      <div className="absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:right-0 bottom-0 lg:bottom-[100px] pointer-events-none z-10">
        <div className="flex pointer-events-auto">
          <div className="flex xl:min-w-[280px] text-white rounded-tl-lg rounded-tr-lg lg:rounded-tr-none lg:rounded-bl-lg bg-black backdrop-blur-sm bg-opacity-50 px-6 py-4 lg:p-4">
            <div className="flex items-center justify-center w-[72px] flex-[0_0_72px] max-lg:hidden">
              <Image src={contents?.thumbnail} width={72} height={72} alt="Thumbnail" className="w-full rounded-lg" />
            </div>
            <div className="lg:ps-4">
              <div className="flex items-center max-lg:hidden">
                <h6 className="text-xs">{contents?.title}</h6>
                <Icon src={ArrowRight} size="sm" className="ms-2" />
              </div>
              <p className="text-sm max-lg:hidden">{contents?.subTitle}</p>
              <div className="flex gap-6 lg:gap-2 lg:my-2">
                {embla
                  ?.scrollSnapList()
                  ?.map((_, index) => (
                    <SliderIndication
                      key={`slider_${index + 1}`}
                      isActive={index === selectedIndex}
                      index={index}
                      handleSliderClick={handleSliderClick}
                      circumference={circumference}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerView;
