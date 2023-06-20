"use client";
import * as S from "./styles";

const Button = (props: any) => {
  return (
    <S.Btn
      type={props.type}
      w={props.w}
      mt={props.mt}
      colorScheme={props.color}
      size={props.size}
      variant={props.variant}
      onClick={() => props.onClick()}
      loadingText={props.loadingText}
      {...props}
    >
      {props.children}
    </S.Btn>
  );
};

export default Button;
