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
      contents: [
        {
          banner: "/images/about-banner/about-banner-1.webp",
          thumb: "/images/about-banner/about-banner-thumb-1.webp",
          title: "Building the <br /> Future of Digital <br /> Possibilities",
          subtitle: `We're more than a company, we're a collective of thinkers, doers, and dreamers.`,
          keyvalue: `120+`,
        },
        {
          banner: "/images/about-banner/about-banner-2.webp",
          thumb: "/images/about-banner/about-banner-thumb-2.webp",
          title: "Building the <br /> Future of Digital <br /> Possibilities",
          subtitle: `We're more than a company, we're a collective of thinkers, doers, and dreamers.`,
          keyvalue: `8+`,
        },
        {
          banner: "/images/about-banner/about-banner-3.webp",
          thumb: "/images/about-banner/about-banner-thumb-3.webp",
          title: "Building the <br /> Future of Digital <br /> Possibilities",
          subtitle: `We're more than a company, we're a collective of thinkers, doers, and dreamers.`,
          keyvalue: `3+`,
        },
        {
          banner: "/images/about-banner/about-banner-4.webp",
          thumb: "/images/about-banner/about-banner-thumb-4.webp",
          title: "Building the <br /> Future of Digital <br /> Possibilities",
          subtitle: `We're more than a company, we're a collective of thinkers, doers, and dreamers.`,
          keyvalue: `10+`,
        },
        {
          banner: "/images/about-banner/about-banner-5.webp",
          thumb: "/images/about-banner/about-banner-thumb-5.webp",
          title: "Building the <br /> Future of Digital <br /> Possibilities",
          subtitle: `We're more than a company, we're a collective of thinkers, doers, and dreamers.`,
          keyvalue: `20+`,
        },
      ],
    },
    historyInfo: {
      title: "Making History <br /> Since 2014",
      histories: [
        {
          title: "2014",
          subTitle: "Start Of An Era",
          description:
            "A group of bright and like-minded software professionals had the spark to make a difference in the retail commerce domain and set off on their journey to start a digital house.",
          media: { lg: "/images/about-history/about-history.webp", sm: "/images/about-history/about-history-sm.webp" },
        },
        {
          title: "2018",
          subTitle: "Period Of Expansion",
          description:
            "We expanded our presence beyond borders, establishing a strong foothold in the UAE to extend our expertise in the retail commerce domain.",
          media: { lg: "/images/about-history/about-history.webp", sm: "/images/about-history/about-history-sm.webp" },
        },
      ],
      historyTrees: [
        { title: "2024-Now", media: "/images/about-history/icons/leaf-5.svg" },
        { title: "2023", media: "/images/about-history/icons/leaf-4.svg" },
        { title: "2019-2022", media: "/images/about-history/icons/leaf-3.svg" },
        { title: "2018-2019", media: "/images/about-history/icons/leaf-2.svg" },
        { title: "2014-2018", media: "/images/about-history/icons/leaf-1.svg" },
      ],
    },
    ourMissions: {
      title: "Our Mission",
      scrollableText: [
        { text: "Delivering ", className: "" },
        { text: "high-quality, cutting edge & customer centric", className: "" },
        { isBreak: true },
        { text: "solutions to businesses and its customers.​", className: "" },
      ],
      contents: [
        { media: "/images/about-mission/mission-1.webp", title: "Always Ahead", description: "Pushing boundaries to ensure you stay on top." },
        {
          media: "/images/about-mission/mission-2.webp",
          title: "Flawless Operations",
          description: "Making complexity simple, so your business runs flawlessly.",
        },
        { media: "/images/about-mission/mission-3.webp", title: "Adaptive Solutions", description: "Smart strategies that evolve with your needs." },
      ],
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
    ourTeams: {
      title: "Our Team",
      description:
        "We maintain a positive work life balance, ensuring our team has the support to grow, innovate, and deliver exceptional digital solutions while enjoying a fulfilling career.",
      contents: [
        { media: "/images/our-teams/team-1.webp" },
        { media: "/images/our-teams/team-2.webp" },
        { media: "/images/our-teams/team-3.webp" },
        { media: "/images/our-teams/team-4.webp" },
        { media: "/images/our-teams/team-5.webp" },
        { media: "/images/our-teams/team-6.webp" },
        { media: "/images/our-teams/team-7.webp" },
      ],
    },
    leaderShips: {
      title: "Our Leadership",
      contents: [
        { media: "/images/leaderships/leader-sharmiq.webp", title: "Sharmiq Kolathodi", description: "Cheif Executive Officer" },
        { media: "/images/leaderships/leader-ashish.webp", title: "Ashish Thomas", description: "Co-Founder, Director & People Success" },
        { media: "/images/leaderships/leader-madhu.webp", title: "Madhulal", description: "Director - Client Success" },
        { media: "/images/leaderships/leader-riju.webp", title: "Riju Thomas", description: "Technical Architect" },
      ],
    },
    awards: {
      title: "Awards",
      contents: [
        { media: "/images/awards/award-1.webp", title: "Cricket Runner Ups", description: "2023" },
        { media: "/images/awards/award-2.webp", title: "Valoriz Rebranding", description: "2023" },
        { media: "/images/awards/award-2.webp", title: "Award Name", description: "2022" },
      ],
    },
    blogs: {
      title: "Blogs",
      contents: [
        {
          media: "/images/blogs/blog-retail.webp",
          title: "Revolutionizing Retail: The Impact of Conversational AI on Customer Experience and Sales",
          points: ["E-Commerce", "Retail", "AI"],
          description: "In an ever-changing retail world, effective conversational touchpoints are crucial for enhancing customer engagement and satisfaction.",
        },
        {
          media: "/images/blogs/blog-ecommerce.webp",
          title: "Revolutionizing E-commerce: How AR and 3D Technology Are Transforming Online Shopping",
          points: ["E-Commerce", "AR", "3D Tech"],
          description:
            "The e-commerce landscape is an axis of relentless innovation. Faced with intense competition and continually shifting customer expectations...",
        },
        {
          media: "/images/blogs/blog-next.webp",
          title: "Next.js Powerup for High-Performance E-Commerce Sites",
          points: ["E-Commerce", "Performance", "Technology"],
          description:
            "Building a high-performance e-commerce storefront is crucial for delivering a seamless user experience and achieving better business outcomes.",
        },
        {
          media: "/images/blogs/check-list.webp",
          title: "Comprehensive E-commerce Checklist: Plan, Launch, and Grow Your Online Store",
          points: ["E-Commerce", "Performance", "Technology"],
          description:
            "Launching an online store is a multifaceted process that requires meticulous planning and execution. A well-structured checklist can help you navigate the complexities...",
        },
      ],
    },
  };

  return <AboutLayout aboutContents={aboutContents} />;
}
