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
