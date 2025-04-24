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
import { FC, ReactNode, cloneElement, isValidElement, useEffect, useRef } from "react";

interface VisibilitySensorProps {
  onVisible: (isVisible: boolean, entry: IntersectionObserverEntry, extraData?: { index?: number }) => void;
  children: ReactNode;
  onlyOnce?: boolean;
  extraData?: { index?: number };
}

const VisibilitySensor: FC<VisibilitySensorProps> = (props) => {
  const { onVisible, children, onlyOnce = true, extraData } = props;

  const onVisibleRef = useRef(onVisible);
  const componentRef = useRef(null);
  const onlyOnceRef = useRef(!!onlyOnce);
  const extraDataRef = useRef(extraData);

  useEffect(() => {
    onVisibleRef.current = onVisible;
  }, [onVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (typeof onVisibleRef.current === "function") {
          onVisibleRef.current(!!entry.isIntersecting, entry, extraDataRef?.current);
        }
        if (onlyOnceRef.current && componentRef.current && !!entry.isIntersecting) {
          observer.unobserve(componentRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return isValidElement(children) ? cloneElement(children, { ref: componentRef } as any) : children;
};

export default VisibilitySensor;
