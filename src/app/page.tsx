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
import HomeLayout from "@app/layouts/HomeLayout";
import { getAnimationImages } from "@utils/commonUtils";

export default function Home() {
  const homeContents = {
    heroBanners: {
      thumbnail: "/images/hero-banner/banner-1-thumb.webp",
      title: "Next",
      subTitle: "Building Next Era",
      medias: [
        { key: "1", lg: "/images/hero-banner/banner-1.webp", sm: "/images/hero-banner/banner-sm-1.webp", type: "image" },
        { key: "2", lg: "/videos/banner-video.mp4", type: "video" },
        { key: "3", lg: "/images/hero-banner/banner-1.webp", sm: "/images/hero-banner/banner-sm-1.webp", type: "image" },
      ],
    },
    abouts: {
      title: "We believe in innovation that accelerates the path forward.",
      media: { key: "1", lg: getAnimationImages(180, "/images/animation/trophy-green/PNG"), sm: "/images/about/video-placeholder.png" },
      features: [
        {
          title: "Ignite Potential",
          description:
            "Your ideas deserve more than just a start, they deserve momentum. We bring speed, innovation, and precision, so you don&apos;t just begin, you take off.",
          values: [
            { key: "1.1", lg: "/images/about/icon-speed.svg", type: "image", title: "Speedy Delivery" },
            { key: "2.2", lg: "/images/about/icon-idea.svg", type: "image", title: "Speedy Delivery" },
            { key: "3.3", lg: "/images/about/icon-execution.svg", type: "image", title: "Speedy Delivery" },
          ],
        },
        {
          title: "Level Up",
          description: "Growth doesn’t have to be complicated. We simplify complexity with sharp strategies and seamless execution, keeping you ahead.",
          values: [
            { key: "2.1", lg: "/images/about/icon-buid-trust.svg", type: "image", title: "Build trust" },
            { key: "2.2", lg: "/images/about/icon-graph.svg", type: "image", title: "Ignite Growth" },
            { key: "2.3", lg: "/images/about/icon-spark.svg", type: "image", title: "Spark change" },
          ],
        },
        {
          title: "Seal the win",
          description: "Your success is our pride. From end to end, we’re here to make sure every effort leads to something extraordinary.",
          values: [
            { key: "3.1", lg: "/images/about/icon-progress-up.svg", type: "image", title: "Pioneer progress" },
            { key: "3.2", lg: "/images/about/icon-result.svg", type: "image", title: "Extraordinary Results" },
            { key: "3.3", lg: "/images/about/icon-path.svg", type: "image", title: "Lead boldly" },
          ],
        },
      ],
    },
    ourServices: {
      contents: [
        {
          title: "Digital Commerce",
          description: "Building flexible e-commerce platforms with seamless integrations, making sure of enhanced connectivity and flexibility.",
          linkText: "Read More",
          media: { lg: "/images/services/service-1.webp", type: "image" },
        },
        {
          title: "AI & ML",
          description: "Delivering AI and ML solutions like chatbots and automation to enhance efficiency and customer experiences.",
          linkText: "Read More",
          media: { lg: "/images/services/service-2.webp", type: "image" },
        },
        {
          title: "Mobile Applications",
          description: "Designing custom mobile apps that fit your needs perfectly and integrate uniformly with your systems.",
          linkText: "Read More",
          media: { lg: "/images/services/service-3.webp", type: "image" },
        },
        {
          title: "Digital Commerce",
          description: "Building flexible e-commerce platforms with seamless integrations, making sure of enhanced connectivity and flexibility.",
          linkText: "Read More",
          media: { lg: "/images/services/service-1.webp", type: "image" },
        },
        {
          title: "AI & ML",
          description: "Delivering AI and ML solutions like chatbots and automation to enhance efficiency and customer experiences.",
          linkText: "Read More",
          media: { lg: "/images/services/service-2.webp", type: "image" },
        },
        {
          title: "Mobile Applications",
          description: "Designing custom mobile apps that fit your needs perfectly and integrate uniformly with your systems.",
          linkText: "Read More",
          media: { lg: "/images/services/service-3.webp", type: "image" },
        },
      ],
    },
    ourClients: {
      title: "Clients",
      description: "Serving Global Leaders with Excellence",
      clients: [
        { logo: "/images/clients/alfuttaim-logo.svg", name: "Afg" },
        { logo: "/images/clients/toysrus.svg", name: "Toysrus" },
        { logo: "/images/clients/fenix-logo.svg", name: "Fenix" },
        { logo: "/images/clients/magrabi-logo.svg", name: "Magrabi" },
        { logo: "/images/clients/noon-logo.svg", name: "Noon" },
        { logo: "/images/clients/teleflora-logo.svg", name: "teleflora" },
        { logo: "/images/clients/american-greetings-logo.svg", name: "American-greetings" },
      ],
    },
    whyValoriz: {
      title: "Why Valoriz?",
      backGround: "/images/why-valoriz/valoriz.webp",
      features: [
        { media: "/images/why-valoriz/icon-layers.svg", title: "10+", description: "Years in tech solutions", alt: "layers" },
        { media: "/images/why-valoriz/icon-aim.svg", title: "25+", description: "Site Launches", alt: "aim" },
        { media: "/images/why-valoriz/icon-people.svg", title: "120+", description: "Agile enabled talent and growing", alt: "people" },
        { media: "/images/why-valoriz/icon-graph.svg", title: "7m+", description: "Operations", alt: "graph" },
      ],
    },
    ourPartners: {
      title: "Partners",
      partners: [
        { media: "/images/partners/microsoft.svg", alt: "microsoft" },
        { media: "/images/partners/shopify.svg", alt: "shopify" },
        { media: "/images/partners/sanity.svg", alt: "sanity" },
        { media: "/images/partners/akeneo.svg", alt: "akeneo" },
        { media: "/images/partners/occtoo.svg", alt: "occtoo" },
        { media: "/images/partners/commerce-layer.svg", alt: "commerce-layer" },
        { media: "/images/partners/brink.svg", alt: "brink" },
      ],
    },
    goodHands: {
      contents: [
        {
          title: "Rewarding association",
          description:
            "Teleflora has been partnering with Valoriz since 2015 and it has been a very rewarding association. Team Valoriz played an important role.",
          client: { logo: "/images/clients/teleflora-color.svg", name: "teleflora", manager: "Praveen Kumar P", role: "Manager - Web Application Development" },
        },
        {
          title: "Brilliant support",
          description:
            "It was a great pleasure to be associated with Valoriz and experience some brilliant support in delivering IT services to our key customers.",
          client: { logo: "/images/clients/blue-rose.svg", name: "blue-rose", manager: "Sambit Rout", role: "VP – Digital" },
        },
        {
          title: "Brilliant support",
          description:
            "It was a great pleasure to be associated with Valoriz and experience some brilliant support in delivering IT services to our key customers.",
          client: { logo: "/images/clients/blue-rose.svg", name: "blue-rose", manager: "Sambit Rout", role: "VP – Digital" },
        },
        {
          title: "Brilliant support",
          description:
            "It was a great pleasure to be associated with Valoriz and experience some brilliant support in delivering IT services to our key customers.",
          client: { logo: "/images/clients/blue-rose.svg", name: "blue-rose", manager: "Sambit Rout", role: "VP – Digital" },
        },
      ],
    },
    caseStudy: {
      title: "Case Studies",
      cases: [
        {
          title: "Transforming B2C Retail: Brand Experience Platform with Sanity",
          description: "Our customer needs an online platform to expand its brand experience community and strengthen customer relationships.",
          media: "/images/case-studies/case-1.webp",
          alt: "sanity",
        },
        {
          title: "Quick B2C e-commerce launch using Shopify",
          description: "Our customer needed a quick and reliable migration of their e-commerce site and their content to Shopify.",
          media: "/images/case-studies/case-2.webp",
          alt: "shopify",
        },
        {
          title: "Data Engineering & Integration",
          description: "Our customer needs an expert team to fully manage their cloud based data integration and data engineering requirements.",
          media: "/images/case-studies/case-3.webp",
          alt: "data engineering",
        },
        {
          title: "Transforming B2C Retail: Brand Experience Platform with Sanity",
          description: "Our customer needs an online platform to expand its brand experience community and strengthen customer relationships.",
          media: "/images/case-studies/case-1.webp",
          alt: "sanity",
        },
        {
          title: "Quick B2C e-commerce launch using Shopify",
          description: "Our customer needed a quick and reliable migration of their e-commerce site and their content to Shopify.",
          media: "/images/case-studies/case-2.webp",
          alt: "shopify",
        },
        {
          title: "Data Engineering & Integration",
          description: "Our customer needs an expert team to fully manage their cloud based data integration and data engineering requirements.",
          media: "/images/case-studies/case-3.webp",
          alt: "data engineering",
        },
      ],
    },
    ourProducts: {
      title: "Our Products",
      products: [
        {
          logo: "/images/our-products/knitrix-logo.svg",
          name: "knitrix",
          description: "Seamlessly automating data synchronization between Akeneo PIM and eCommerce platforms for consistent, accurate product information.",
          link: "",
        },
        {
          logo: "/images/our-products/vbrand-logo.svg",
          name: "vbrand",
          description: "A low code Brand Experience Platform empowering teams to create engaging, non-transactional mobile apps effortlessly.",
          link: "",
        },
        {
          logo: "/images/our-products/shopsphere-logo.svg",
          name: "shopsphere",
          description:
            "A cloud native, feature rich ecommerce platform enabling customizable, omnichannel shopping experiences and seamless multi-brand rollouts.",
          link: "",
        },
        {
          logo: "/images/our-products/streak-logo.svg",
          name: "streak",
          description: "A lightweight, high-performance front-end framework for eCommerce, blending SSR & SSG, and built for headless commerce.",
          link: "",
        },
      ],
    },
    projectInMind: {
      title: "Have A Project In Mind?",
      description: "It takes less than a minute",
      countries: [
        { name: "India", countryCode: "+91", phoneNo: "471 270 0666", flag: "/images/project-in-mind/icon-india.svg" },
        { name: "Dubai - UAE", countryCode: "+971", phoneNo: "42 23 3920", flag: "/images/project-in-mind/icon-dubai.svg" },
      ],
      email: { title: "Mail Us: info@valoriz.com", mailId: "info@valoriz.com" },
    },
    highlights: {
      content: [
        { text: "Turning complexity into simplicity, ", className: "" },
        { isBreak: true },
        { text: "so you can ", className: "" },
        { text: "focus on success", className: "text-primary" },
      ],
    },
  };

  return <HomeLayout homeContents={homeContents} />;
}
