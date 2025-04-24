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

import ContactUsLayout from "@app/layouts/ContactUsLayout";

export default function contactUs() {
  const services = {
    serviceBanner: { media: "/images/service-listing/services-banner.webp" },
    ourServices: [
      {
        link: "/services",
        media: "/images/service-listing/mobile-app.webp",
        title: "Digital Commerce",
        description: "We build scalable digital commerce platforms with seamless integrations, ensuring enhanced connectivity and flexibility.",
      },
      {
        link: "/services",
        media: "/images/service-listing/data-analysis.webp",
        title: "Data Analytics",
        description: "We help you unlock real-time insights, predict trends, and track performance for smarter decisions.",
      },
      {
        link: "/services",
        media: "/images/service-listing/digital-commerce.webp",
        title: "Mobile Applications",
        description: "We design custom mobile apps that fit your needs perfectly and integrate seamlessly with your systems.",
      },
      {
        link: "/services",
        media: "/images/service-listing/ai-ml.webp",
        title: "AI & ML",
        description: "Delivering AI and ML solutions like chatbots and automation to enhance efficiency and customer experiences.",
      },
      {
        link: "/services",
        media: "/images/service-listing/enterprise.webp",
        title: "Enterprise Software",
        description: "Creating smart, scalable solutions that streamline operations, boost efficiency, and drive business growth.",
      },
      {
        link: "/services",
        media: "/images/service-listing/qa.webp",
        title: "QA & Testing",
        description: "Delivering flawless, high-performing software through rigorous testing and quality assurance.",
      },
      {
        link: "/services",
        media: "/images/service-listing/cloud.webp",
        title: "Cloud Modernisation",
        description: "We help modernize your cloud with smooth migration, serverless solutions, and top notch security.",
      },
      {
        link: "/services",
        media: "/images/service-listing/product-engineering.webp",
        title: "Product Engineering",
        description: "We build smart, scalable products with APIs and cloud solutions to help your business grow.",
      },
      {
        link: "/services",
        media: "/images/service-listing/bar-graph.webp",
        title: "Digital Process Automation",
        description: "We automate business processes to help you work smarter, cut down on mistakes, and keep everything running seamlessly.",
      },
      {
        link: "/services",
        media: "/images/service-listing/digital.webp",
        title: "Digital Experience",
        description: "We design digital experiences that are smooth, fun to use, and leave users excited to return.",
      },
    ],
    deliveries: [
      { title: "10000+", subTitle: "Successful Projects" },
      { title: "25+", subTitle: "Site Launches" },
      { title: "7M+", subTitle: "Operations" },
    ],
  };
  return <ContactUsLayout contents={services} />;
}
