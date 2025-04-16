import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { buttonCva } from "./Button";

export type ButtonCVAProps = VariantProps<typeof buttonCva>;

export type ButtonProps = { showLoading?: boolean } & ButtonCVAProps & ButtonHTMLAttributes<HTMLButtonElement>;
