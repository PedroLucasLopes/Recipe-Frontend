"use client";
import { Input } from "@chakra-ui/react";
import { InputTypes } from "./types";
import * as S from "./styles";
const InputForm = ({
  type,
  placeholder,
  size,
  variant,
  label,
  onChange,
  onBlur,
}: InputTypes) => {
  return (
    <S.Label>
      {label}
      <Input
        type={type}
        placeholder={placeholder}
        size={size}
        variant={variant}
        onChange={onChange}
        onBlur={onBlur}
      />
    </S.Label>
  );
};

export default InputForm;
