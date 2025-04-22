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
"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { CommonProps } from "@lib/types";
import Button from "@core/button/Button";
import Icon from "@core/icon/Icon";
import Link from "next/link";
import ArrowRight from "@app/common/icons/ArrowRight";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { serviceOptions } from "@utils/constants";
import ChevronLeft from "@app/common/icons/ChevronLeft";
import ChevronRight from "@app/common/icons/ChevronRight";
import { hasArrayElements } from "@utils/commonUtils";

interface BlogsViewProps {
  blogs: CommonProps;
}

const BlogsView: FC<BlogsViewProps> = ({ blogs }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...serviceOptions,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="py-16 lg:py-26 overflow-hidden">
      <div className="container">
        <div className="flex justify-between">
          <h3 className="text-h4 lg:text-h2">{blogs?.title}</h3>
          <div className="flex items-center justify-center gap-6 lg:gap-8">
            <button onClick={() => emblaApi?.scrollPrev()} disabled={prevBtnDisabled} className="disabled:opacity-20">
              <Icon src={ChevronLeft} size="md" />
            </button>
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={`blog${index + 1}`}
                  onClick={() => scrollTo(index)}
                  className={`flex items-center justify-center w-4 h-4 rounded-full ${
                    index === selectedIndex ? "border-4 border-black" : "border border-gray-600 hover:border-gray-500 group"
                  }`}
                >
                  <span className={`w-1 h-1 rounded-full ${index === selectedIndex ? "bg-black" : "bg-gray-600 group-hover:bg-gray-500"}`}></span>
                </button>
              ))}
            </div>
            <button onClick={() => emblaApi?.scrollNext()} disabled={nextBtnDisabled} className="disabled:opacity-20">
              <Icon src={ChevronRight} size="md" />
            </button>
          </div>
        </div>
        <div className="mt-14" ref={emblaRef}>
          <div className="flex -mx-5 lg:-mx-7">
            {hasArrayElements(blogs?.contents) &&
              blogs?.contents?.map((content) => (
                <div className="flex flex-col flex-none w-[85%] md:w-1/3 xl:w-[33.33%] px-5 lg:px-7" key={content?.title}>
                  <Image src={content?.media} width={800} height={583} alt="Icon" className="w-full rounded" />
                  <div className="flex flex-col justify-between h-full mt-8">
                    <h4 className="text-h6">{content?.title}</h4>
                    <div>
                      <div className="flex flex-wrap gap-4 mt-4">
                        {hasArrayElements(content?.points) &&
                          content?.points?.map((point) => (
                            <div className="flex items-center gap-1" key={point}>
                              <span className="w-1 h-1 bg-primary rounded-full block"></span>
                              <p className="text-xs font-medium">{point}</p>
                            </div>
                          ))}
                      </div>
                      <p className="text-md mt-4">{content?.description}</p>
                      <div className="mt-8">
                        <Link href=" " className="flex items-center text-sm font-medium">
                          Read More
                          <Icon src={ArrowRight} size="sm" className="ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <Button variant="outline-secondary" className="flex items-center">
            <span>View All Blogs</span>
            <Icon src={ArrowRight} size="sm" className="ms-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsView;
