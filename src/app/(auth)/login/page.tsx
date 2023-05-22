"use client";
import React, { useCallback, useEffect } from "react";
import * as S from "./styles";
import { Jomolhari } from "next/font/google";
import { HiSearch } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import InputForm from "@/app/components/Input/Input";
import ButtonForm from "@/app/components/Button/Button";
import Link from "next/link";
import { instance } from "@/app/api/instance";

const jomolhari = Jomolhari({ weight: "400", subsets: ["latin"] });
export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [body, setBody] = React.useState({});

  async function submitForm() {
    await setBody({ username: username, password: password });
    const { data } = await instance.post("/login", body);

    window.localStorage.setItem("access_token", data.access_token);
  }

  useEffect(() => {
    console.log(window.localStorage.getItem("access_token"));
  }, []);

  return (
    <S.LoginContainer>
      <S.Header>
        <h1 className={jomolhari.className}>De casa</h1>
      </S.Header>
      <S.Main>
        <S.LeftGrid>
          <S.GridTitle>
            Entre aqui para obter:
            <span className={jomolhari.className}>Receitas</span>
          </S.GridTitle>
        </S.LeftGrid>
        <S.RightGrid>
          <form>
            <S.LoginInputBox>
              <HiSearch />
              <InputForm
                type="text"
                variant="flushed"
                placeholder="Usuário"
                size="lg"
                onChange={({ target }: { target: HTMLInputElement }) =>
                  setUsername(target.value)
                }
              />
            </S.LoginInputBox>

            <S.LoginInputBox>
              <HiLockClosed />
              <InputForm
                type="password"
                variant="flushed"
                placeholder="Senha"
                size="lg"
                onChange={({ target }: { target: HTMLInputElement }) =>
                  setPassword(target.value)
                }
              />
            </S.LoginInputBox>
            <ButtonForm type="button" size="lg" onClick={submitForm}>
              Entrar
            </ButtonForm>
          </form>
          <p>
            Ou <Link href={"sign-up"}>Cadastre-se</Link>
          </p>
        </S.RightGrid>
      </S.Main>
    </S.LoginContainer>
  );
}
