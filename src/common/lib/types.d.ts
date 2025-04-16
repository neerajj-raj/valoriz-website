export type IconProps = {
  src: React.FC<React.SVGProps<SVGSVGElement>>;
  variant?: "primary" | "white" | "black" | gray400;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export type IconComponentProps = {
  className?: string;
};

export interface History {
  id: string;
  year: string;
  title: string;
  description: string;
}
