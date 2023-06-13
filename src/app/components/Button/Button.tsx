"use client";
import * as S from "./styles";
import { ButtonTypes } from "./types";

const Button = ({
  children,
  color,
  size,
  variant,
  type,
  onClick,
}: ButtonTypes) => {
  return (
    <S.Btn
      type={type}
      colorScheme={color}
      size={size}
      variant={variant}
      onClick={() => onClick && onClick()}
    >
      {children}
    </S.Btn>
  );
};

export default Button;
