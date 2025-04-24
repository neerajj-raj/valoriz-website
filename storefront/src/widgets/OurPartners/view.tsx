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

interface OurPartnersViewProps {
  ourPartners: Record<string, any>;
}

const OurPartnersView: FC<OurPartnersViewProps> = ({ ourPartners }) => {
  return (
    <section className="py-16 xl:py-26 bg-light-gradient">
      <div className="container">
        <h2 className="text-h4 xl:text-h2">{ourPartners?.title}</h2>
        <div className="flex justify-center gap-y-26 xl:gap-y-30 flex-wrap my-24 xl:my-[160px]">
          {hasArrayElements(ourPartners?.partners) &&
            ourPartners?.partners?.map((partner: Record<string, any>, index: number) => (
              <div className="flex justify-center items-center w-1/2 xl:w-1/4 px-4" key={`partners_${index + 1}`}>
                <Image width={168} height={60} src={partner?.media} alt={partner?.alt} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartnersView;
