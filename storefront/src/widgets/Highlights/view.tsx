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
import React, { FC, useMemo, useRef } from "react";
import RunningTextCanvas from "@components/RunningTextCanvas";
import { useScroll } from "framer-motion";
import { getRunningTextCharCount } from "@utils/commonUtils";

interface HighlightsViewProps {
  highlights: Record<string, any>;
}

const HighlightsView: FC<HighlightsViewProps> = ({ highlights }) => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const content = useMemo(() => highlights?.scrollableText as Array<Record<string, any>>, [highlights?.scrollableText]);
  const totalChars = useMemo(() => getRunningTextCharCount(content), [content]);

  return (
    <section ref={targetRef} className="relative min-h-screen" style={{ height: `${totalChars * 10}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="container">
          <div className="w-full lg:w-10/12 mx-auto">
            <h2 className="text-h3 lg:text-h2 leading-snug tracking-wide flex flex-wrap">
              <RunningTextCanvas content={content} scrollYProgress={scrollYProgress} totalChars={totalChars} />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsView;
