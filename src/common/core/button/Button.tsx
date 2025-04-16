import { cva } from "class-variance-authority";
import React from "react";
import cn from "@lib/tailwind";
import { ButtonProps } from "./types";

export const buttonCva = cva("", {
  variants: {
    variant: {
      primary: "bg-primary-gradient text-white hover:primary-gradient hover:text-white active:primary-gradient active:text-white focus:outline-none",
      secondary: "bg-secondary text-white hover:bg-secondary hover:text-white active:bg-secondary active:text-white focus:outline-none",
      light: "bg-gray-100 text-secondary hover:bg-gray-300 hover:text-secondary active:gray-300 active:text-secondary focus:outline-none",
      "outline-secondary":
        "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white active:bg-secondary active:text-white focus:outline-none",
      "outline-beige":
        "border border-beige text-beige bg-transparent hover:bg-beige hover:text-secondary active:bg-beige active:text-secondary focus:outline-none",
      "outline-light":
        "border border-white text-white bg-transparent hover:bg-white hover:text-secondary active:bg-beige active:text-secondary focus:outline-none",
      white: "bg-white text-secondary hover:bg-gray-300 hover:text-secondary active:gray-300 active:text-secondary focus:outline-none",
    },
    size: {
      sm: "px-3 py-1 text-sm font-medium rounded h-[30px]",
      md: "px-4 py-2 text-base font-medium rounded h-[38px]",
      lg: "px-5 py-2 text-md font-medium rounded h-[44px]",
      xl: "px-6 py-3 text-lg font-medium rounded h-[52px]",
      xxl: "p-6 text-lg font-medium rounded h-[76px]",
      28: "w-[28px] h-[28px] flex items-center justify-center rounded-lg",
    },
    disabled: {
      false: "opacity-100",
      true: "cursor-not-allowed opacity-70",
    },
  },
  defaultVariants: {
    size: "xxl",
    variant: "primary",
    disabled: false,
  },
});

const Button = ({ children, className, disabled = false, variant = "primary", size = "xxl", ...restProps }: ButtonProps) => {
  const classes = cn(buttonCva({ variant, disabled, size }), className);
  return (
    <button disabled={disabled} className={classes} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
