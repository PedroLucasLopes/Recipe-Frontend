"use client";
import { Button } from "@chakra-ui/react";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const IconMediaLogin = ({
  children,
  provider,
}: {
  children: React.ReactNode;
  provider: string;
}) => {
  return (
    <Button
      backgroundColor="transparent"
      onClick={(e) => {
        e.preventDefault();
        signIn(provider);
      }}
    >
      {children}
    </Button>
  );
};

export default IconMediaLogin;
