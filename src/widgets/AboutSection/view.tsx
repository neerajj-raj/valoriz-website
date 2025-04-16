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
import { mediaTypes } from "@utils/constants";
import { motion, AnimatePresence } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import ScrollCanvasAnimation from "./components/AnimationCanvas";
import { getFeatureIndex, hasArrayElements } from "@utils/commonUtils";
import useScroll from "@hooks/useScroll";

interface AboutSectionViewProps {
  abouts: Record<string, any>;
}

const AboutSectionView: FC<AboutSectionViewProps> = ({ abouts }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const features = abouts?.media?.lg;

  const [currentFeature, setCurrentFeature] = useState(0);
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

  return (
    <section className="relative min-h-[100vh] bg-black" style={{ height: `${features.length * 100}vh` }} ref={sectionRef}>
      <div className="sticky top-20 lg:top-0 py-10 xl:py-20 z-10">
        <section className="text-white pb-5 lg:pb-9">
          <div className="container flex flex-col justify-between h-full">
            <div className="grid lg:grid-cols-2">
              <h3 className="text-h4 lg:text-h3">{abouts?.title}</h3>
              <div className="flex items-center justify-center h-[400px] max-lg:h-[200px]">
                {abouts?.media?.type === mediaTypes.ANIMATION ? (
                  <ScrollCanvasAnimation frames={abouts?.media?.lg} />
                ) : (
                  <Image src={abouts?.media?.lg} width={507} height={141} alt="About" className="w-full max-w-[400px] mx-auto max-lg:hidden" />
                )}
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                <div>
                  <h4 className="text-h5 lg:text-h4">{abouts?.features?.[currentFeature]?.title}</h4>
                  <p className="text-md lg:text-h6 mt-6">{abouts?.features?.[currentFeature]?.description}</p>
                </div>
                <div className="flex items-end justify-center lg:justify-end gap-16 mt-10 lg:mt-0">
                  {hasArrayElements(abouts?.features?.[currentFeature]?.values) &&
                    abouts?.features?.[currentFeature]?.values?.map((value: Record<string, any>) => (
                      <div className="flex flex-col text-center" key={value?.key}>
                        <Image src={value?.lg} width={48} height={48} alt="" className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                        <h5 className="text mt-6 lg:mt-4">{value?.title}</h5>
                      </div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSectionView;
