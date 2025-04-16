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

import AboutLayout from "@app/layouts/AboutLayout";

export default function about() {
  const aboutContents = {
    banners: {
      media: "/images/about-banner/mainBanner.webp",
      roundedBanner: [
        { media: "/images/about-banner/rounded-2.webp", alt: "image-1" },
        { media: "/images/about-banner/rounded-2.webp", alt: "image-2" },
        { media: "/images/about-banner/rounded-1.webp", alt: "image-3" },
        { media: "/images/about-banner/rounded-3.webp", alt: "image-4" },
        { media: "/images/about-banner/rounded-3.webp", alt: "image-5" },
      ],
    },
    historyInfo: {
      histories: [
        {
          id: "2014-expansion",
          year: "2014",
          title: "Start of an Era",
          description:
            "A group of bright and like-minded software professionals had the spark to make a difference in the retail commerce domain and set off on their journey to start a digital house.",
        },
        {
          id: "2019-growth",
          year: "2019",
          title: "Period of Expansion",
          description: "We expanded by adding two new offices, one in Dubai and an additional one in Technopark, Trivandrum.",
        },
        {
          id: "2020-ai-innovation",
          year: "2020",
          title: "Partnership with Microsoft",
          description: "Our journey with Microsoft reached a major milestone when we became a Co-sell partner.",
        },
        {
          id: "2021-expansion",
          year: "2021",
          title: "Period of Expansion",
          description:
            "A group of bright and like-minded software professionals had the spark to make a difference in the retail commerce domain and set off on their journey to start a digital house.",
        },
        {
          id: "2023-growth",
          year: "2023",
          title: "Period of Expansion",
          description: "We expanded by adding two new offices, one in Dubai and an additional one in Technopark, Trivandrum.",
        },
        {
          id: "2025-ai-innovation",
          year: "2025",
          title: "Partnership with Microsoft",
          description: "Our journey with Microsoft reached a major milestone when we became a Co-sell partner.",
        },
      ],
    },
    mission: {
      media: "/images/about-mission/background.webp",
      title: "Our Mission",
      description: "Delivering high-quality, cutting-edge & customer-centric solutions to businesses and its customers.",
    },
    goals: {
      features: [
        { id: "site-launches", count: "25+", label: "Site Launches" },
        { id: "operations", count: "7m+", label: "Operations" },
        { id: "countries", count: "30+", label: "Countries" },
        {
          id: "partners",
          count: "120+",
          label: "Agile enabled talent and growing",
        },
        { id: "projects", count: "10+", label: "Years Of Dedication" },
      ],
    },
  };

  return <AboutLayout aboutContents={aboutContents} />;
}
