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
import useEmblaCarouselOptions from "@hooks/useEmblaCarouselOptions";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FC } from "react";
import { HistoryInfo } from "@lib/types";
import AboutHistoryTree from "./components/AboutHistoryTree";
import { hasArrayElements } from "@utils/commonUtils";

interface AboutHistoryViewProps {
  historyInfo: HistoryInfo;
}

const AboutHistoryView: FC<AboutHistoryViewProps> = ({ historyInfo }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollTo, stopAutoplay } = useEmblaCarouselOptions(emblaApi, true);

  return (
    <section className="bg-black overflow-hidden">
      <div className="container flex flex-col min-h-screen">
        <div className="lg:flex flex-1">
          <div className="lg:flex flex-1 py-16 lg:py-26">
            <div className="lg:w-5/12">
              <h3 className="text-h4 lg:text-h2 text-white" dangerouslySetInnerHTML={{ __html: historyInfo?.title }} />
            </div>
            <div className="lg:w-7/12 flex flex-col items-center flex-1 lg:items-end max-lg:mt-10">
              {/* Year Buttons */}
              <div className="flex gap-8">
                {historyInfo?.histories?.map((history, index) => (
                  <button
                    key={`btn${history?.title}`}
                    onClick={() => {
                      scrollTo(index);
                      stopAutoplay();
                    }}
                    className={`flex flex-col justify-center text-h5 lg:text-h4 ${selectedIndex === index ? "text-primary" : "text-gray-700"}`}
                  >
                    <span className="leading-tight">{history?.title}</span>
                    <span className="leading-tight">&bull;</span>
                  </button>
                ))}
              </div>
              <div className="overflow-hidden w-full mt-6 lg:mt-12" ref={emblaRef}>
                <div className="flex">
                  {historyInfo?.histories?.map((history) => (
                    <div className="shrink-0 grow-0 basis-full" key={`details${history?.title}`}>
                      <div className="flex flex-col items-center flex-1 lg:items-end">
                        <div className="w-full lg:max-w-[320px]">
                          <Image src={history?.media?.lg} width={800} height={600} alt={history?.title} className="w-full rounded-lg max-lg:hidden" />
                          <Image src={history?.media?.sm} width={800} height={416} alt={history?.title} className="w-full rounded-lg lg:hidden" />
                        </div>
                        <div className="text-white lg:text-end mt-6 lg:mt-10">
                          <h4 className="text-h6 lg:text-h5">{history?.subTitle}</h4>
                          <p className="text-md lg:text-h6 mt-4">{history?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[230px] ps-17 max-lg:hidden">
            <div className="flex items-end justify-end w-full h-full">
              {hasArrayElements(historyInfo?.historyTrees) && <AboutHistoryTree historyTrees={historyInfo?.historyTrees} />}
            </div>
          </div>
          <div className="flex lg:hidden mb-10">
            <button className="flex flex-col items-center flex-1">
              <span className="text-white text-nowrap">2014-2018</span>
              <span className="w-4 h-4 border-4 border-primary rounded-full mt-1" />
            </button>
            <button className="flex flex-col items-center flex-1 justify-end">
              <span className="w-4 h-4 border-4 border-gray-900 rounded-full mt-1" />
            </button>
            <button className="flex flex-col items-center flex-1 justify-end">
              <span className="w-4 h-4 border-4 border-gray-900 rounded-full mt-1" />
            </button>
            <button className="flex flex-col items-center flex-1 justify-end">
              <span className="w-4 h-4 border-4 border-gray-900 rounded-full mt-1" />
            </button>
            <button className="flex flex-col items-center flex-1 justify-end">
              <span className="w-4 h-4 border-4 border-gray-900 rounded-full mt-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistoryView;
