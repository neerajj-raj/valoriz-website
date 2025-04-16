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

import { FC, useCallback } from "react";
import Image from "next/image";
import usePrevNextButtons from "@hooks/usePrevNextButtons";
import { serviceOptions } from "@utils/constants";
import useEmblaCarousel from "embla-carousel-react";
import Icon from "@core/icon/Icon";
import ChevronLeft from "@app/common/icons/ChevronLeft";
import ChevronRight from "@app/common/icons/ChevronRight";
import { hasArrayElements } from "@utils/commonUtils";

interface GoodHandsViewProps {
  goodHands: Record<string, any>;
}

const GoodHandsView: FC<GoodHandsViewProps> = ({ goodHands }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...serviceOptions,
    slidesToScroll: 1,
  });
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const getSelectedIndex = useCallback(() => {
    if (!emblaApi) return 0;
    return emblaApi.selectedScrollSnap();
  }, [emblaApi]);

  return (
    <section className="py-16 lg:py-26">
      <div className="container">
        <h3 className="text-h4 xl:text-h2">
          Your <br /> Good Hands!
        </h3>
        <div className="overflow-hidden mt-12 xl:mt-26" ref={emblaRef}>
          <div className="flex -mx-5 lg:-mx-7">
            {hasArrayElements(goodHands?.contents) &&
              goodHands?.contents?.map((content: Record<string, any>, index: number) => (
                <div className="flex flex-col flex-none w-full xl:w-1/2 px-5 lg:px-7" key={`goodHands_${index + 1}`}>
                  <div className="flex align-middle gap-x-4">
                    <Image width={25} height={32} src="/images/good-hands/quote.svg" alt="quote" />
                    <p className="text-md font-semibold uppercase">{content?.title}</p>
                  </div>
                  <p className="text-h5 mt-4 mb-12">{content?.description}</p>
                  <div className="mt-auto">
                    <Image src={content?.client?.logo} height={32} width={131} alt={content?.client?.name} />
                    <p className="text-md font-medium mt-4">{content?.client?.manager}</p>
                    <p>{content?.client?.role}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 lg:gap-8 mt-16 xl:mt-26">
          <button onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="disabled:opacity-20">
            <Icon src={ChevronLeft} size="md" />
          </button>
          <div className="flex items-center gap-2">
            {emblaApi?.scrollSnapList().map((_, index) => {
              const isActive = getSelectedIndex() === index;
              return (
                <button
                  key={`slider_${index + 1}`}
                  onClick={() => emblaApi.scrollTo(index)}
                  className={`flex items-center justify-center w-4 h-4 rounded-full  ${isActive ? "border-black border-4" : "border-gray-600 border-2"}`}
                >
                  <span className={`w-1 h-1 rounded-full ${isActive ? "bg-black" : "bg-gray-600"}`}></span>
                </button>
              );
            })}
          </div>
          <button onClick={onNextButtonClick} disabled={nextBtnDisabled} className="disabled:opacity-20">
            <Icon src={ChevronRight} size="md" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoodHandsView;
