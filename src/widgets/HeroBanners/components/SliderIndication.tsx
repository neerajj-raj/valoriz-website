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
import { heroBannerConstants } from "@utils/constants";
import { FC } from "react";

interface SliderIndicationProps {
  isActive: boolean;
  index: number;
  handleSliderClick: (index: number) => void;
  circumference: number;
}

const SliderIndication: FC<SliderIndicationProps> = ({ isActive, index, handleSliderClick, circumference }) => {
  return (
    <button
      onClick={() => handleSliderClick(index)}
      className={`group relative flex items-center justify-center w-4 h-4 rounded-full transition-all ${isActive ? "border-none" : "border border-gray-600 hover:border-gray-500"}`}
    >
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 16 16">
        <circle
          cx="8"
          cy="8"
          r={heroBannerConstants.RADIUS}
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeDasharray={circumference}
          strokeDashoffset={isActive ? 0 : circumference}
          style={{
            transition: "stroke-dashoffset 1.5s ease-out",
          }}
        />
      </svg>
      <span className={`w-1 h-1 rounded-full z-10 transition-all ${isActive ? "bg-white" : "bg-gray-600 group-hover:bg-gray-500"}`}></span>
    </button>
  );
};

export default SliderIndication;
