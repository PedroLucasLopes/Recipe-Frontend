import { AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { Alert as AlertForm } from "@chakra-ui/react";
import React from "react";

interface IProps {
  error: "error" | "info" | "warning" | "success" | "loading";
  title: string;
  description: string;
}

const Alert: React.FC<IProps> = ({ error, title, description }) => {
  return (
    <AlertForm status={error}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </AlertForm>
  );
};

export default Alert;
