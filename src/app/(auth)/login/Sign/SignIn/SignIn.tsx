import InputForm from "@/app/components/Input/Input";
import { HStack } from "@chakra-ui/react";
import { memo, useCallback, useState } from "react";
import { FiLock } from "react-icons/fi";
import { AiOutlineGoogle, AiOutlineUser } from "react-icons/ai";
import { Button as ButtonSignUp } from "@chakra-ui/react";
import * as S from "./styles";
import IconMediaLogin from "../../IconMediaLogin/IconMediaLogin";
import { BsFacebook } from "react-icons/bs";

const SignIn: React.FC<ISignPanels> = ({ data, setData, setStep }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeUser = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setUsername(target.value);
    },
    []
  );

  const onChangePassword = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setPassword(target.value);
    },
    []
  );

  const onClick = useCallback(() => {
    setStep(2);
  }, [setStep]);

  const onBlur = useCallback(() => {
    setData((current) => ({
      ...current,
      signIn: {
        username: username,
        password: password,
      },
    }));
  }, [password, setData, username]);

  return (
    <>
      <form>
        <S.LoginInputBox>
          <AiOutlineUser />
          <InputForm
            type="text"
            variant="flushed"
            placeholder="Usuário"
            size="lg"
            onChange={onChangeUser}
            value={data.signIn.username}
          />
        </S.LoginInputBox>

        <S.LoginInputBox>
          <FiLock />
          <InputForm
            type="password"
            variant="flushed"
            placeholder="Senha"
            size="lg"
            onChange={onChangePassword}
            onBlur={onBlur}
            value={data.signIn.password}
          />
        </S.LoginInputBox>
      </form>
      <HStack w="100%" align="center" justify="center">
        <p>Ou</p>
        <ButtonSignUp
          type="button"
          border="none"
          outline="none"
          backgroundColor="transparent"
          p="0"
          pt=".9rem"
          onClick={onClick}
        >
          Cadastre-se
        </ButtonSignUp>
      </HStack>
      <HStack pt="2rem" justify="center" align="center" gap="1.5rem">
        <IconMediaLogin provider="google">
          <AiOutlineGoogle size="1.8rem" />
        </IconMediaLogin>
        <IconMediaLogin provider="">
          <BsFacebook size="1.8rem" />
        </IconMediaLogin>
      </HStack>
    </>
  );
};

export default memo(SignIn);
