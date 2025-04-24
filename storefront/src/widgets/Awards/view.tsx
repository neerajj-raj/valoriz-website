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
import ChevronLeft from "@app/common/icons/ChevronLeft";
import ChevronRight from "@app/common/icons/ChevronRight";
import Icon from "@core/icon/Icon";
import useEmblaCarouselOptions from "@hooks/useEmblaCarouselOptions";
import { CommonProps } from "@lib/types";
import { hasArrayElements } from "@utils/commonUtils";
import { commonEmblaOptions } from "@utils/constants";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FC } from "react";

interface AwardsViewProps {
  awards: CommonProps;
}

const AwardsView: FC<AwardsViewProps> = ({ awards }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(commonEmblaOptions);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick, selectedIndex, scrollSnaps, scrollTo } = useEmblaCarouselOptions(emblaApi);

  return (
    <section className="py-16 lg:py-26 overflow-hidden">
      <div className="container">
        <h3 className="text-h4 lg:text-h2">{awards?.title}</h3>
        <div className="mt-12 xl:mt-26" ref={emblaRef}>
          <div className="flex -mx-5">
            {hasArrayElements(awards?.contents) &&
              awards?.contents?.map((content) => (
                <div className="flex flex-col flex-none w-[85%] md:w-1/3 xl:w-[33.33%] px-5" key={content?.title}>
                  <Image src={content?.media} width={396} height={476} alt={content?.title} className="w-full rounded" />
                  <div className="mt-4 xl:mt-8">
                    <h4 className="text-h6 xl:text-h5">{content?.title}</h4>
                    <p className="text-md">{content?.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-12 xl:mt-26">
          <div className="flex items-center justify-center gap-6 lg:gap-8">
            <button onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="disabled:opacity-20">
              <Icon src={ChevronLeft} size="md" />
            </button>
            <div className="flex items-center gap-2">
              {scrollSnaps?.map((_, index) => (
                <button
                  key={`award-${index + 1}`}
                  onClick={() => scrollTo(index)}
                  className={`flex items-center justify-center w-4 h-4 rounded-full ${
                    index === selectedIndex ? "border-4 border-black" : "border border-gray-600 hover:border-gray-500 group"
                  }`}
                >
                  <span className={`w-1 h-1 rounded-full ${index === selectedIndex ? "bg-black" : "bg-gray-600 group-hover:bg-gray-500"}`}></span>
                </button>
              ))}
            </div>
            <button onClick={onNextButtonClick} disabled={nextBtnDisabled} className="disabled:opacity-20">
              <Icon src={ChevronRight} size="md" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsView;
