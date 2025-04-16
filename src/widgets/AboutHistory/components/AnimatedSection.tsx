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
import { FC, useEffect, useRef, useState } from "react";
import { History } from "@lib/types";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface AnimatedSectionProps {
  history: History;
}

const AnimatedSection: FC<AnimatedSectionProps> = ({ history }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const [hasExitedTop, setHasExitedTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const { top, bottom } = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const earlyExit = bottom < viewportHeight * 0.6;

        setIsInView(entry.isIntersecting);
        setHasExitedTop(top < 0 && earlyExit);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else if (hasExitedTop) {
      controls.start({
        scale: 0.85,
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      });
    } else {
      controls.start({
        scale: 0.9,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [isInView, hasExitedTop, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex items-end gap-4 lg:gap-6 border-b last:border-b-0 py-6 lg:py-10"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={controls}
    >
      <div className="flex mb-1 flex-[0_0_2.5rem] lg:flex-[0_0_4rem]">
        <Image src="/images/about-history/history.png" alt="Mission" className="w-full mx-auto" width={64} height={64} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold text-primary mb-2 lg:mb-4">{history?.year}</h2>
        <h3 className="text-xl lg:text-h2">{history?.title}</h3>
        <h4 className="lg:text-xl mt-2 lg:mt-4">{history?.description}</h4>
      </div>
    </motion.div>
  );
};

export default AnimatedSection;
