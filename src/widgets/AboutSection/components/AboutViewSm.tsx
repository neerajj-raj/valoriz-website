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
import { hasArrayElements } from "@utils/commonUtils";
import Image from "next/image";
import React, { FC } from "react";

interface AboutSectionViewProps {
  abouts: Record<string, any>;
}

const AboutViewSm: FC<AboutSectionViewProps> = ({ abouts }) => {
  return (
    <section className="text-white bg-black min-h-screen pt-[140px] lg:pt-[180px] pb-16 lg:pb-26">
      <div className="container flex flex-col justify-between h-full">
        <div className="grid lg:grid-cols-2">
          <h3 className="text-h4 lg:text-h3">{abouts?.title}</h3>
          <div className="flex items-center justify-center h-[400px] max-lg:h-[200px]">
            <Image src={abouts?.media?.sm} width={507} height={141} alt="About" className="w-full max-w-[400px] mx-auto" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {hasArrayElements(abouts?.features) &&
            abouts?.features?.map((feature: Record<string, any>, index: number) => (
              <React.Fragment key={`hav-${index + 1}`}>
                <div>
                  <h4 className={`text-h5 lg:text-h4 ${index === 0 ? "" : "mt-10"}`}>{feature?.title}</h4>
                  <p className="lg:text-h6 mt-6">{feature?.description}</p>
                </div>
                <div className="flex items-end justify-center lg:justify-end gap-16 mt-10 lg:mt-0">
                  {hasArrayElements(feature?.values) &&
                    feature?.values?.map((value: Record<string, any>) => (
                      <div className="flex flex-col text-center" key={value?.key}>
                        <Image src={value?.lg} width={48} height={48} alt={value?.title} className="max-w-full mx-auto max-lg:w-8 max-lg:h-8" />
                        <h5 className="text mt-6 lg:mt-4">{value?.title}</h5>
                      </div>
                    ))}
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};
export default AboutViewSm;
