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
import { motion, AnimatePresence } from "framer-motion";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { getFeatureIndex, hasArrayElements } from "@utils/commonUtils";
import useScroll from "@hooks/useScroll";
import AnimationCanvas from "./components/AnimationCanvas";

interface AboutSectionViewProps {
  abouts: Record<string, any>;
}

const AboutSectionView: FC<AboutSectionViewProps> = ({ abouts }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaFrames = useMemo(() => abouts?.media?.lg, [abouts?.media?.lg]);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [maxScrollHeight, setMaxScrollHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const scrolledHeight = Math.abs(scrollY - sectionTop);
    const totalHeight = sectionRef.current.offsetHeight;
    const index = getFeatureIndex(scrolledHeight, totalHeight, abouts?.features?.length);

    if (index >= 0 && index < abouts?.features?.length) {
      setCurrentFeature(index);
    }
  }, [abouts?.features, scrollY]);

  useEffect(() => {
    const heroBannerHeight = document.getElementById("hero-banner")?.scrollHeight ?? 0;
    setMaxScrollHeight((sectionRef?.current?.offsetHeight ?? 0) + heroBannerHeight);
  }, [mediaFrames]);

  return (
    <section className="relative min-h-screen bg-black" style={{ height: `${mediaFrames?.length * 10}vh` }} ref={sectionRef}>
      {/* Sticky Full Content */}
      <div className="sticky top-0 h-screen flex items-center justify-center py-10 xl:py-20 z-10">
        <div className="text-white w-full">
          <div className="container flex flex-col justify-center h-full">
            {/* Top Section */}
            <div className="grid lg:grid-cols-2 items-center">
              <h3 className="text-h4 lg:text-h3 lg:text-left lg:mb-20">{abouts?.title}</h3>
              <div className="flex items-center justify-center lg:justify-end h-[400px] max-lg:h-[200px] lg:mt-5 w-full">
                <AnimationCanvas frames={mediaFrames} maxScrollHeight={maxScrollHeight} />
              </div>
            </div>
            {/* AnimatePresence Section */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10"
              >
                <div>
                  <h4 className="text-h5 lg:text-h4">{abouts?.features?.[currentFeature]?.title}</h4>
                  <p className="text-md lg:text-h6 mt-6">{abouts?.features?.[currentFeature]?.description}</p>
                </div>
                <div className="flex items-end justify-center lg:justify-end gap-16 mt-10 lg:mt-0">
                  {hasArrayElements(abouts?.features?.[currentFeature]?.values) &&
                    abouts?.features?.[currentFeature]?.values?.map((value: Record<string, any>) => (
                      <div className="flex flex-col text-center" key={value?.key}>
                        <Image src={value?.lg} width={48} height={48} alt={value?.title} className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                        <h5 className="text mt-6 lg:mt-4">{value?.title}</h5>
                      </div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionView;
