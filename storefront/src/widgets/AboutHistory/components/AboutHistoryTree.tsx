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
import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getHistoryTreeClasses } from "@utils/commonUtils";

interface AboutHistoryTreeProps {
  historyTrees: Array<{ title: string; media: string }>;
}

const AboutHistoryTree: FC<AboutHistoryTreeProps> = ({ historyTrees }) => {
  const refs = useRef<(HTMLSpanElement | null)[]>(Array(historyTrees?.length).fill(null));
  const [inViews, setInViews] = useState<boolean[]>(Array(historyTrees?.length).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInViews((prev) => {
            const newViews = [...prev];
            newViews[index] = entry.isIntersecting;
            return newViews;
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="flex flex-col justify-end w-[124px] h-full">
      {historyTrees?.map((each, index) => {
        const { span1, span2, span3, span4 } = getHistoryTreeClasses(index);
        return (
          <div className="relative flex-1 h-full max-h-[17%] transition-all" key={each?.title}>
            <span className={span1} />
            <button className="flex">
              <span className={span2}>
                <span
                  className={`${span3} ${inViews[index] ? "h-12" : "h-0"}`}
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                >
                  <Image src={each?.media} width={100} height={50} alt={each?.title} className="w-full" />
                </span>
              </span>
              <span className={span4}>{each?.title}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AboutHistoryTree;
