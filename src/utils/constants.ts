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

import type { EmblaOptionsType } from "embla-carousel";

export const mediaTypes = {
  IMAGE: "image",
  VIDEO: "video",
  ANIMATION: "animation",
};

export const heroBannerConstants = {
  RADIUS: 7.5,
};

export const serviceOptions: EmblaOptionsType = {
  align: "start",
  loop: false,
  containScroll: "trimSnaps",
};

export const SCROLL_THRESHOLD = 300;
export const BUFFER_SIZE = 10;
export const SERVICE_BANNER_HEIGHT = 80;

export const pageTypes = {
  CONTACT_US: "contact-us",
};

export const aboutBannerStyle: Record<string, any> = {
  sm: [
    "w-[32px] h-[32px] rounded-full overflow-hidden opacity-50",
    "w-[64px] h-[64px] rounded-full overflow-hidden opacity-70",
    "w-[88px] h-[88px] rounded-full overflow-hidden",
    "w-[64px] h-[64px] rounded-full overflow-hidden opacity-70",
    "w-[32px] h-[32px] rounded-full overflow-hidden opacity-50",
  ],
  lg: [
    "w-[32px] h-[32px] rounded-full overflow-hidden opacity-30",
    "w-[80px] h-[80px] rounded-full overflow-hidden opacity-50",
    "w-[128px] h-[128px] rounded-full overflow-hidden",
    "w-[80px] h-[80px] rounded-full overflow-hidden opacity-50",
    "w-[32px] h-[32px] rounded-full overflow-hidden opacity-30",
  ],
};
