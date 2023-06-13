"use client";
import { useState } from "react";
import * as S from "./styles";
import { Jomolhari } from "next/font/google";
import Sign from "./Sign/Sign";
import { defaultData } from "./Sign/defaultData";
import Nav from "./Sign/Nav";

const jomolhari = Jomolhari({ weight: "400", subsets: ["latin"] });
export default function Login() {
  const [data, setData] = useState<ISignData>(defaultData);
  const [step, setStep] = useState(1);

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
          <Sign step={step} setStep={setStep} setData={setData} data={data} />
          <Nav step={step} data={data} setData={setData} setStep={setStep} />
        </S.RightGrid>
      </S.Main>
    </S.LoginContainer>
  );
}
