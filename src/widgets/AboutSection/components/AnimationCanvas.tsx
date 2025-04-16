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
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
interface AnimationCanvasProps {
  frames: string[];
}
const AnimationCanvas: FC<AnimationCanvasProps> = ({ frames }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesCount = useMemo(() => frames.length, [frames]);

  useEffect(() => {
    const imagesArray: HTMLImageElement[] = [];
    for (let i = 0; i < framesCount; i++) {
      const img = new Image();
      img.src = frames[i];
      imagesArray.push(img);
    }
    setImages(imagesArray);
  }, [framesCount, frames]);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const scrollTop = window.scrollY;
    const maxScrollTop = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(framesCount - 1, Math.floor(scrollFraction * framesCount));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
  }, [framesCount, images]);

  useEffect(() => {
    if (images.length === framesCount) render();

    const handleScroll = () => {
      requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        render();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [framesCount, images, render]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default AnimationCanvas;
