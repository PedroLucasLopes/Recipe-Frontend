export type InputTypes = {
  type: "email" | "text" | "tel" | "datetime-local" | "password" | "number";
  placeholder?: string;
  size?: "xs" | "xs" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  label?: string;
  onChange?: ({ target }: { target: HTMLInputElement }) => void;
  onBlur?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};
