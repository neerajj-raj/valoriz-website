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

import React, { FC, useCallback, useMemo } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface RunningTextCanvasProps {
  content: Array<Record<string, any>>;
  scrollYProgress: MotionValue<number>;
  totalChars: number;
}

interface RenderTextProps {
  scrollYProgress: MotionValue<number>;
  totalChars: number;
  index: number;
  startIndex: number;
  char: string;
}

const RenderText: FC<RenderTextProps> = ({ index, totalChars, scrollYProgress, startIndex, char }) => {
  const { start, end, globalIndex } = useMemo(() => {
    const globalIndexIn = startIndex + index;
    return { start: globalIndexIn / totalChars, end: (globalIndexIn + 1) / totalChars, globalIndex: globalIndexIn };
  }, [index, startIndex, totalChars]);

  const color = useTransform(scrollYProgress, [start, end], ["#000000", "#049E76"]);

  return (
    <motion.span key={globalIndex} className="inline-block" style={{ color }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

const RunningTextCanvas: FC<RunningTextCanvasProps> = ({ content, scrollYProgress, totalChars }) => {
  const getStartIndex = useCallback(
    (index: number) => {
      return content
        .slice(0, index)
        .filter((item) => !item.isBreak)
        .reduce((acc, item) => acc + (item?.text?.length ?? 0), 0);
    },
    [content]
  );

  const renderText = useCallback(
    (blockIndex: number, text: string = "", className: string = "") => {
      const startIndex = getStartIndex(blockIndex);
      return (
        <span className={className}>
          {text
            ?.split("")
            ?.map((char, i) => (
              <RenderText key={`${char}_${i + 1}`} scrollYProgress={scrollYProgress} totalChars={totalChars} index={i} startIndex={startIndex} char={char} />
            ))}
        </span>
      );
    },
    [getStartIndex, scrollYProgress, totalChars]
  );

  return content.map((item, i) => {
    if (item.isBreak) {
      return <br key={`br-${i + 1}`} className="w-full" />;
    } else {
      return <React.Fragment key={`text-${i + 1}`}>{renderText(i, item?.text, item.className)}</React.Fragment>;
    }
  });
};

export default RunningTextCanvas;
