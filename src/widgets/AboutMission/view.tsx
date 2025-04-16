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
import { FC, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface AboutMissionViewProps {
  contents: Record<string, any>;
}

const AboutMissionView: FC<AboutMissionViewProps> = ({ contents }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "start start"] });
  const imageWidth = useTransform(scrollYProgress, [0, 1], ["65%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0", "0px"]);
  return (
    <section ref={sectionRef} className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
      <motion.div className="absolute flex items-center h-full mx-auto overflow-hidden" style={{ width: imageWidth, borderRadius }}>
        <Image src={contents?.media} alt="Mission" fill className="mx-auto" />
        <span className="absolute w-full h-full bg-black/50"></span>
      </motion.div>
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="w-9/12 lg:w-1/2">
          <div className="text-center text-white">
            <h2 className="mb-6 uppercase">{contents?.title}</h2>
            <h3 className="text-h3 xl:text-display2">{contents?.description}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionView;
