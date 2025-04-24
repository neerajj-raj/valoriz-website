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
import { FC, useCallback, useMemo } from "react";
import Image from "next/image";
import Icon from "@core/icon/Icon";
import Button from "@core/button/Button";
import ArrowRight from "@app/common/icons/ArrowRight";
import useEmblaCarousel from "embla-carousel-react";
import { AboutBanner } from "@lib/types";
import useEmblaCarouselOptions from "@hooks/useEmblaCarouselOptions";
import { getBannerSizeClasses } from "@utils/commonUtils";

interface AboutBannerViewProps {
  banners: Record<string, any>;
}

const AboutBannerView: FC<AboutBannerViewProps> = ({ banners }) => {
  const [emblaMainRef, emblaMain] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollTo } = useEmblaCarouselOptions(emblaMain);

  const slides: AboutBanner[] = useMemo(() => banners?.contents ?? [], [banners]);

  // Helper to get visible thumbnails with virtual loop illusion
  const getVisibleThumbs = useCallback(
    (selectedIndex: number) => {
      const total = slides.length;
      const visibleCount = 5;
      const half = Math.floor(visibleCount / 2);

      const visibleThumbs = [];

      for (let i = -half; i <= half; i++) {
        const index = (selectedIndex + i + total) % total;
        visibleThumbs.push({ ...slides[index], realIndex: index, offset: i });
      }

      return visibleThumbs;
    },
    [slides]
  );

  return (
    <section className="bg-black">
      <div className="relative flex min-h-screen py-16 xl:py-26">
        {/* Main Embla Carousel */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden" ref={emblaMainRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div
                className="min-w-full relative flex items-center flex-1 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/70 before:z-20"
                key={`ab-${index + 1}`}
              >
                <div className="absolute left-0 top-0 w-full h-full z-10">
                  <Image src={slide.banner} width={1920} height={1133} alt="about" className="w-full h-full max-h-full object-cover" />
                </div>
                <div className="container relative z-30">
                  <div className="xl:flex xl:items-center">
                    <div className="xl:w-1/2 max-xl:text-center text-white">
                      <h1 className="text-h3 xl:text-h1 text-primary-light leading-tight" dangerouslySetInnerHTML={{ __html: slide.title }} />
                      <h6 className="text-md xl:text-h6 mt-2 xl:mt-6">{slide.subtitle}</h6>
                      <Button variant="outline-light" className="flex items-center mt-8 xl:mt-12 max-xl:mx-auto">
                        <span>Lets Talk</span>
                        <Icon src={ArrowRight} size="sm" className="ms-2" />
                      </Button>
                    </div>
                    <div className="xl:w-1/3 max-xl:hidden xl:pe-16">
                      <div className="flex">
                        <div className="flex flex-col justify-center flex-1 text-center">
                          <div className="text-[184px] leading-tight font-semibold text-gradient">{slide.keyvalue}</div>
                          <p className="text-h4 text-white">Skilled Professionals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Thumbnails */}
        <div className="absolute max-xl:bottom-12 max-xl:left-1/2 max-xl:-translate-x-1/2 max-xl:max-w-[calc(100%-40px)] max-md:w-full xl:right-[8%] xl:top-1/2 xl:-translate-y-1/2 z-20">
          <div className="flex xl:flex-col items-center max-md:justify-between md:gap-14 xxl:gap-20 transition-transform duration-500">
            {getVisibleThumbs(selectedIndex).map((slide, idx) => {
              const isActive = slide.offset === 0;
              const sizeClass = getBannerSizeClasses(isActive, slide.offset);
              const opacityClass = isActive ? "" : Math.abs(slide.offset) > 1 ? "opacity-30" : "opacity-50";
              return (
                <button
                  key={`ab_btn-${idx + 1}`}
                  onClick={() => scrollTo(slide.realIndex)}
                  className={`rounded-full overflow-hidden transition-all duration-300 shrink-0 ${sizeClass} ${opacityClass}`}
                >
                  <Image src={slide.thumb} width={150} height={150} alt="thumbnail" className="w-full" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerView;
