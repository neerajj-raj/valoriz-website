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
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";
import ServicesListing from "@widgets/ServicesListing";
import ServiceBanner from "@widgets/ServiceBanner";

interface AboutLayoutProps {
  services: Record<string, any>;
}

const ServiceLayout: FC<AboutLayoutProps> = ({ services }) => {
  return (
    <>
      <Header />
      <ServiceBanner serviceBanner={services?.serviceBanner} />
      <ServicesListing services={services} />
      <Footer />
    </>
  );
};

export default ServiceLayout;
