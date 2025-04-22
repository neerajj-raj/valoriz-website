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
import { FC, useMemo, useRef } from "react";
import { CommonProps } from "@lib/types";
import { useScroll } from "framer-motion";
import { getRunningTextCharCount, hasArrayElements } from "@utils/commonUtils";
import Image from "next/image";
import RunningTextCanvas from "@components/RunningTextCanvas";

interface AboutMissionViewProps {
  ourMissions: CommonProps;
}

const AboutMissionView: FC<AboutMissionViewProps> = ({ ourMissions }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const content = useMemo(() => ourMissions?.scrollableText, [ourMissions?.scrollableText]);

  const totalChars = useMemo(() => getRunningTextCharCount(content), [content]);

  return (
    <section className="relative min-h-screen" ref={sectionRef} style={{ height: `${totalChars * 10}vh` }}>
      <div className="sticky top-0 h-screen container flex flex-col">
        {/* Top Title */}
        <div className="flex-none pt-16 lg:pt-26">
          <h2 className="text-h4 lg:text-h2">{ourMissions?.title}</h2>
        </div>

        {/* Middle Running Text */}
        <div className="flex-1 flex items-center">
          {/* flex flex-col justify-between h-full */}
          <h3 className="text-h5 lg:text-h3">
            <RunningTextCanvas content={content} targetRef={sectionRef} scrollYProgress={scrollYProgress} totalChars={totalChars} />
          </h3>
        </div>

        {/* Bottom Description List */}
        <div className="flex-none pb-16 lg:pb-26 overflow-x-hidden max-lg:-mx-6">
          <div className="flex flex-nowrap max-lg:overflow-x-auto max-lg:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {hasArrayElements(ourMissions?.contents) &&
              ourMissions?.contents?.map((content, index) => (
                <div className="flex items-center gap-4 lg:gap-8 max-lg:w-[360px] lg:w-4/12 shrink-0" key={`om-baner-${index + 1}`}>
                  <div className="w-[108px] lg:w-[132px] shrink-0">
                    <Image src={content?.media} width={600} height={600} alt={content?.title} className="w-full rounded-lg" />
                  </div>
                  <div>
                    <h4 className="text-h6 pe-4 lg:pe-4">{content?.title}</h4>
                    <p className="mt-2 pe-6 lg:pe-16">{content?.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionView;
