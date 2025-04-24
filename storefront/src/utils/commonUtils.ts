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

import { heroBannerConstants } from "./constants";

export const hasArrayElements = (list: any[]) => Array.isArray(list) && list.length > 0;

export const getCircumference = () => 2 * Math.PI * heroBannerConstants.RADIUS;

export const getAnimationImages = (frames: number, pathPrefix: string) =>
  Array.from({ length: frames }).map((_, i) => `${pathPrefix}/${String(i + 1).padStart(4, "0")}.webp`);

export const getFeatureIndex = (currentHeight: number, totalHeight: number, featuresCount: number) => {
  const segmentHeight = totalHeight / featuresCount;
  for (let i = 0; i < featuresCount; i++) {
    const start = i * segmentHeight;
    const end = (i + 1) * segmentHeight;
    if (currentHeight >= start && currentHeight < end) {
      return i;
    }
  }
  return 0;
};

export const getRunningTextCharCount = (content: Array<Record<string, any>>) =>
  content?.filter((item) => !item.isBreak).reduce((acc, item) => acc + (item?.text?.length ?? 0), 0);

export const getBannerSizeClasses = (isActive: boolean, offset: number) => {
  if (isActive) return "w-[96px] h-[96px] xl:w-[128px] xl:h-[128px] border-4 border-primary";
  else if (Math.abs(offset) === 1) return "w-[48px] h-[48px] xl:w-[80px] xl:h-[80px]";
  return "w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]";
};

export const getHistoryTreeClasses = (index: number) => {
  const span1Classes = ["absolute left-2 bottom-0 w-[2px] h-[calc(100%-16px)] bg-primary", "absolute left-2 bottom-0 w-[2px] h-[calc(100%-9px)] bg-primary"];
  const span2Classes = [
    "relative w-[18px] h-[18px] border-4 border-primary rounded-full  shrink-0",
    "relative w-[10px] h-[10px] border-2 ms-[4px] border-primary rounded-full  shrink-0",
  ];
  const span3Classes = [
    "absolute bottom-[9px] left-1/2 -translate-x-1/2 w-25 overflow-hidden transition-[height] duration-700 delay-300",
    "absolute bottom-1 left-1/2 -translate-x-1/2 w-21 overflow-hidden transition-[height] duration-700 delay-300",
    "absolute bottom-1 left-1/2 -translate-x-1/2 w-17 overflow-hidden transition-[height] duration-700 delay-300",
    "absolute bottom-0 left-1/2 -translate-x-1/2 w-15 overflow-hidden transition-[height] duration-700 delay-300",
    "absolute bottom-full left-1/2 -translate-x-1/2 w-8 overflow-hidden transition-[height] duration-700 delay-300",
  ];
  const span4Classes = ["text-white leading-none ps-4", "text-white leading-none -mt-[2px] ps-4"];
  const classIndex = index === 0 ? 0 : 1;
  return { span1: span1Classes[classIndex], span2: span2Classes[classIndex], span3: span3Classes[index], span4: span4Classes[classIndex] };
};
