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
import { BUFFER_SIZE } from "@utils/constants";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
interface AnimationCanvasProps {
  frames: string[];
  maxScrollHeight: number;
}
const AnimationCanvas: FC<AnimationCanvasProps> = ({ frames, maxScrollHeight }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesCount = useMemo(() => frames?.length, [frames]);

  const loadImage = useCallback(
    (index: number) => {
      if (images?.[index] || !frames?.[index]) return;
      const img = new Image();
      img.src = frames[index];
      setImages((prev) => {
        const updated = [...prev];
        updated[index] = img;
        return updated;
      });
    },
    [frames, images]
  );

  const render = useCallback(() => {
    const canvas = canvasRef?.current;
    const container = containerRef?.current;

    if (!canvas || !container) return;

    const scale = window.devicePixelRatio || 1;

    // Only set width/height if they changed (avoid layout thrashing)
    const displayWidth = canvas.offsetWidth;
    const displayHeight = canvas.offsetHeight;
    const scaledWidth = displayWidth * scale;
    const scaledHeight = displayHeight * scale;

    if (canvas.width !== scaledWidth || canvas.height !== scaledHeight) {
      canvas.width = scaledWidth;
      canvas.height = scaledHeight;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const scrollTop = window.scrollY;
    const maxScrollTop = maxScrollHeight - window.innerHeight;
    const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;

    const frameIndex = Math.min(framesCount - 1, Math.floor(scrollFraction * framesCount));

    // Preload next BUFFER_SIZE frames
    for (let i = frameIndex; i < Math.min(frameIndex + BUFFER_SIZE, framesCount); i++) {
      if (!images[i]) loadImage(i);
    }

    const currentImage = images[frameIndex];
    if (!currentImage) return;

    // Only apply scaling once per frame
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any transform
    ctx.scale(scale, scale);
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Draw image centered in square
    const squareSize = Math.min(displayWidth, displayHeight);
    const x = (displayWidth - squareSize) / 2;
    const y = (displayHeight - squareSize) / 2;

    ctx.drawImage(currentImage, x, y, squareSize, squareSize);
    ctx.restore();
  }, [framesCount, images, loadImage, maxScrollHeight]);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(render);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [render]);

  return (
    <div ref={containerRef} className="items-center justify-center w-[400px] h-[400px] max-lg:h-[200px] max-lg:w-[200px]">
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default AnimationCanvas;
