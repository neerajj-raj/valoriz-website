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
import { motion } from "framer-motion";

interface AboutGoalsViewProps {
  contents: Record<string, any>;
}

const AboutGoalsView: FC<AboutGoalsViewProps> = ({ contents }) => {
  const [step, setStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { features } = contents || {};

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef?.current?.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.6;
      if (top < triggerPoint && Math.abs(top) < height * 0.6) {
        const progress = Math.abs(top) / (height * 0.6);
        setStep(Math.min(features?.length, Math.ceil(progress * features?.length)));
      } else if (top >= triggerPoint) {
        setStep(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [features?.length]);

  return (
    <section id="about-goals" ref={sectionRef} className="relative min-h-[100vh] bg-black" style={{ height: `${features.length * 100}vh` }}>
      <div className="sticky top-20 lg:top-0 lg:flex items-center h-screen py-10 xl:py-20 z-10">
        <div className="container text-white">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-h1 xl:text-display2">
                We&apos;re Always <br />
                Moving Forward
              </h2>
              <h3 className="text-lg mt-3 lg:mt-6">
                At Company, we&apos;re always evolving, creating an impact, and setting new industry standards. Innovation drives us forward, and our growth
                tells the story.
              </h3>
            </div>
            <div className="lg:w-5/12 relative flex items-center overflow-hidden h-[300px] lg:h-[500px]">
              {features.map((item: Record<string, any>, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 500 }}
                  animate={{
                    opacity: step === index + 1 ? 1 : 0,
                    y: step === index + 1 ? 0 : step > index + 1 ? -500 : 500,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute w-full"
                  style={{
                    display: step >= index ? "block" : "none",
                  }}
                >
                  <h3 className="text-display1 lg:text-[140px] font-light">{item.number}</h3>
                  <h4 className="text-h3 lg:text-h2 text-gray-400 mt-4 lg:mt-10">{item.label}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGoalsView;
