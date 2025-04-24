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

import { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface LazyWrapperProps {
  children: ReactNode;
}

const LazyWrapper: FC<LazyWrapperProps> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return <div ref={ref}>{inView ? children : null}</div>;
};

export default LazyWrapper;
