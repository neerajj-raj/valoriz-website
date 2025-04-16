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
import AboutSection from "@widgets/AboutSection";
import HeroBanners from "@widgets/HeroBanners";
import Highlights from "@widgets/Highlights";
import OurServices from "@widgets/OurServices";
import OurClients from "@widgets/OurClients";
import WhyValoriz from "@widgets/WhyValoriz";
import OurPartners from "@widgets/OurPartners";
import GoodHands from "@widgets/GoodHands";
import CaseStudy from "@widgets/CaseStudy";
import OurProducts from "@widgets/OurProducts";
import ProjectInMind from "@widgets/ProjectInMind";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";
import LazyWrapper from "@components/LazyWrapper";

interface HomeLayoutProps {
  homeContents: Record<string, any>;
}

const HomeLayout: FC<HomeLayoutProps> = ({ homeContents }) => {
  return (
    <>
      <Header />
      <HeroBanners contents={homeContents?.heroBanners} />
      <AboutSection abouts={homeContents?.abouts} />
      <LazyWrapper>
        <Highlights highlights={homeContents?.highlights} />
        <OurServices ourServices={homeContents?.ourServices} />
        <OurClients ourClients={homeContents?.ourClients} />
        <WhyValoriz contents={homeContents?.whyValoriz} />
        <GoodHands goodHands={homeContents?.goodHands} />
        <OurPartners ourPartners={homeContents?.ourPartners} />
        <CaseStudy caseStudy={homeContents?.caseStudy} />
        <OurProducts ourProducts={homeContents?.ourProducts} />
        <ProjectInMind projectInMind={homeContents?.projectInMind} />
        <Footer />
      </LazyWrapper>
    </>
  );
};

export default HomeLayout;
