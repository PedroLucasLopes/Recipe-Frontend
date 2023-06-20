export type ButtonTypes = {
  children: string;
  color?:
    | "whiteAlpha"
    | "blackAlpha"
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "teal"
    | "blue"
    | "cyan"
    | "purple"
    | "pink"
    | "linkedin"
    | "facebook"
    | "messenger"
    | "whatsapp"
    | "twitter"
    | "telegram";
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost" | "link";
  type: "button" | "submit";
  w?: string;
  mt?: string;
  onClick?: React.Dispatch;
  loadingText?: string;
  isLoading?: boolean;
  loading?: boolean;
};
