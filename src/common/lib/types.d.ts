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

export interface AboutBanner {
  banner: string;
  thumb: string;
  title: string;
  subtitle: string;
  keyvalue: string;
}

export interface CommonProps {
  title: string;
  description: string;
  scrollableText: Array<Record<string, any>>;
  contents: Array<{ media: string; title: string; description: string; points: string[] }>;
}
