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
import { FC } from "react";
import { History } from "@lib/types";
import AnimatedSection from "./components/AnimatedSection";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface AboutHistoryViewProps {
  contents: Record<string, any>;
}

const AboutHistoryView: FC<AboutHistoryViewProps> = ({ contents }) => {
  return (
    <section className="relative min-h-[90vh] bg-white py-6 xl:py-20 z-10">
      <div className="container">
        <div className="lg:flex lg:justify-between lg:gap-10">
          <div className="lg:w-5/12 lg:sticky lg:top-[8rem] flex h-full">
            <div className="flex flex-col text-center">
              <h3 className="mb-3 lg:mb-6 uppercase">We Valoriz</h3>
              <h2 className="text-h1 xl:text-display2">
                Making History <br />
                Since 2014
              </h2>
              <DotLottieReact
                src="https://lottie.host/518961a3-6933-478b-9462-e09c874ecdfb/bxQIyhtiMO.lottie"
                loop
                autoplay
                className="h-[300px] md:h-[500px]"
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-6/12">
            {contents?.histories?.map((history: History) => <AnimatedSection key={history?.id} history={history} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistoryView;
