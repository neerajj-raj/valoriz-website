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
import { FC } from "react";
import Image from "next/image";
import Icon from "@core/icon/Icon";
import Button from "@core/button/Button";
import ArrowRight from "@app/common/icons/ArrowRight";
import { hasArrayElements } from "@utils/commonUtils";
import RoundedBanner from "./components/RoundedBanner";

interface AboutBannerViewProps {
  contents: Record<string, any>;
}

const AboutBannerView: FC<AboutBannerViewProps> = ({ contents }) => {
  return (
    <section className="bg-black">
      <div className="relative min-h-screen py-16 lg:py-26 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/70 before:z-20">
        <div className="absolute left-0 top-0 w-full h-full z-10">
          <Image src={contents?.media} width={1920} height={1133} alt="" className="w-full" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full z-20">
          <div className="container lg:flex lg:items-center">
            <div className="lg:w-1/2 max-lg:text-center text-white">
              <h1 className="text-h3 lg:text-h1 text-primary-light leading-tight">
                Building the <br />
                Future of Digital <br />
                Possibilities
              </h1>
              <h6 className="text-h6 mt-2 lg:mt-6">
                <span className="max-lg:hidden">We&apos;re more than a company, we&apos;re a collective of thinkers, doers, and dreamers.</span>
                Our culture is the heartbeat of everything we create.
              </h6>
              <Button variant="outline-light" className="flex items-center mt-12 max-lg:hidden">
                <span>Lets Talk</span>
                <Icon src={ArrowRight} size="sm" className="ms-2" />
              </Button>
            </div>
            {hasArrayElements(contents?.roundedBanner) && (
              <div className="lg:w-1/2">
                <div className="flex flex-col items-center lg:hidden mt-18">
                  <div className="flex items-center gap-7 overflow-x-hidden">
                    <RoundedBanner contents={contents} size="sm" />
                  </div>
                  <Button variant="outline-light" className="flex items-center mt-12">
                    <span>Lets Talk</span>
                    <Icon src={ArrowRight} size="sm" className="ms-2" />
                  </Button>
                </div>
                <div className="flex max-lg:hidden">
                  <div className="flex-1 text-center">
                    <div className="text-[208px] leading-tight font-semibold gradient-text">25+</div>
                    <p className="text-[48px] text-white">Site Launches</p>
                  </div>
                  <div className="flex items-center lg:flex-col gap-20">
                    <RoundedBanner contents={contents} size="lg" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerView;
