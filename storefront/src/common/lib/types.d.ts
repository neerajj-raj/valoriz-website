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
  title: string;
  subTitle: string;
  description: string;
  media: { lg: string; sm: string };
}

export interface HistoryInfo {
  title: string;
  histories: History[];
  historyTrees: Array<{ title: string; media: string }>;
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

export interface SubMenuItems {
  key: string;
  title?: string;
  link?: string;
}

export interface HeaderColumn {
  description?: string;
  viewAll?: string;
  key: string;
  subMenuItems?: SubMenuItems[];
}

export interface MenuItems {
  key: string;
  title?: string;
  link?: string;
  col1?: HeaderColumn;
  col2?: HeaderColumn;
  col3?: HeaderColumn;
  col4?: HeaderColumn;
}

export interface HeaderContent {
  logo: { black: string; white: string };
  menuItems: MenuItems[];
}
