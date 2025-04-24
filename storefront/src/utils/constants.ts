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

export const commonEmblaOptions: EmblaOptionsType = {
  align: "start",
  loop: false,
  containScroll: "trimSnaps",
  slidesToScroll: 1,
};

export const SCROLL_THRESHOLD = 300;
export const BUFFER_SIZE = 10;
export const SERVICE_BANNER_HEIGHT = 80;
export const AUTOPLAY_INTERVAL = 5000;

export const pageTypes = {
  CONTACT_US: "contact-us",
};
