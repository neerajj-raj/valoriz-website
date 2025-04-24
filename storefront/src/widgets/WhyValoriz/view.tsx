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
import { FC } from "react";

interface WhyValorizViewProps {
  contents: Record<string, any>;
}

const WhyValorizView: FC<WhyValorizViewProps> = ({ contents }) => {
  return (
    <section className="min-h-screen text-white bg-black py-16 lg:py-26">
      <div className="container">
        <h3 className="text-h4 lg:text-h2">{contents?.title}</h3>
        <div className="flex lg:items-center lg:gap-28">
          <div className="w-1/2 max-lg:hidden">
            <Image src={contents?.backGround} width={664} height={664} alt="" className="w-full max-w-[664px] mx-auto" />
          </div>
          <div className="w-full lg:w-1/2">
            {hasArrayElements(contents?.features) &&
              contents?.features?.map((feature: Record<string, any>, index: number) => (
                <div className="flex items-center w-full" key={`feature_${index + 1}`}>
                  <div className="pe-8 lg:pe-13">
                    <Image src={feature?.media} width={56} height={56} alt={feature?.alt} className="max-w-full" />
                  </div>
                  <div className="flex-1 border-b border-b-white py-6 lg:py-8">
                    <h4 className="text-h4 lg:text-h3">{feature?.title}</h4>
                    <p className="text-md lg:text-h6">{feature?.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyValorizView;
