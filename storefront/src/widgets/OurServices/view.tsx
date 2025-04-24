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
import ArrowRight from "@app/common/icons/ArrowRight";
import ChevronLeft from "@app/common/icons/ChevronLeft";
import ChevronRight from "@app/common/icons/ChevronRight";
import Button from "@core/button/Button";
import Icon from "@core/icon/Icon";
import useEmblaCarouselOptions from "@hooks/useEmblaCarouselOptions";
import { hasArrayElements } from "@utils/commonUtils";
import { commonEmblaOptions } from "@utils/constants";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface OurServicesViewProps {
  ourServices: Record<string, any>;
}

const OurServicesView: FC<OurServicesViewProps> = ({ ourServices }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(commonEmblaOptions);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick, selectedIndex, scrollSnaps, scrollTo } = useEmblaCarouselOptions(emblaApi);

  return (
    <section className="text-white bg-black py-16 lg:py-26 overflow-hidden">
      <div className="container">
        <div className="flex justify-between">
          <h3 className="text-h4 lg:text-h2">Our Services</h3>
          <div className="flex items-center justify-center gap-6 lg:gap-8">
            <button onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="disabled:opacity-20">
              <Icon src={ChevronLeft} size="md" />
            </button>
            <div className="flex items-center gap-2 max-lg:hidden">
              {scrollSnaps?.map((_, index) => (
                <button
                  key={`os_${index + 1}`}
                  onClick={() => scrollTo(index)}
                  className={`flex items-center justify-center w-4 h-4 rounded-full ${
                    index === selectedIndex ? "border-4 border-white" : "border border-gray-600 hover:border-gray-500 group"
                  }`}
                >
                  <span className={`w-1 h-1 rounded-full ${index === selectedIndex ? "bg-white" : "bg-gray-600 group-hover:bg-gray-500"}`}></span>
                </button>
              ))}
            </div>
            <button onClick={onNextButtonClick} disabled={nextBtnDisabled} className="disabled:opacity-20">
              <Icon src={ChevronRight} size="md" />
            </button>
          </div>
        </div>
        <div className="mt-6 lg:mt-18" ref={emblaRef}>
          <div className="flex -mx-5 lg:-mx-7">
            {hasArrayElements(ourServices?.contents) &&
              ourServices?.contents?.map((content: Record<string, any>, index: number) => (
                <div className="flex flex-col flex-none w-[85%] md:w-1/3 xl:w-[33.33%] px-5 lg:px-7" key={`service_${index + 1}`}>
                  <Image src={content?.media?.lg} width={800} height={583} alt="services" className="w-full rounded" />
                  <div className="flex flex-col justify-between h-full mt-8">
                    <h4 className="text-h6">{content?.title}</h4>
                    <div>
                      <p className="text-md mt-4">{content?.description}</p>
                      <div className="mt-8">
                        <Link href=" " className="flex items-center text-sm font-medium">
                          {content?.linkText}
                          <Icon src={ArrowRight} size="sm" className="ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-14 lg:mt-24">
          <Button variant="outline-light" className="flex items-center">
            <span>View All Services</span>
            <Icon src={ArrowRight} size="sm" className="ms-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurServicesView;
