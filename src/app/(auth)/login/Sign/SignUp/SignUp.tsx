import Input from "@/app/components/Input/Input";
import { Box, VStack } from "@chakra-ui/react";
import { useCallback, useState, memo } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SignUp: React.FC<ISignPanels> = ({ data, setData, setStep }) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const getInputValue = useCallback(
    (target: string, setValue: TSetState<string>) => {
      setValue(target);
    },
    []
  );

  const onChangeVerifyPassword = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setVerifyPassword(target.value);
    },
    []
  );

  const onBack = useCallback(() => {
    setStep(1);
  }, [setStep]);

  const onBlur = useCallback(() => {
    if (verifyPassword === password) {
      setData({
        signIn: {
          username: username,
          password: password,
        },
        signUp: {
          email: email,
          city: city,
          country: country,
        },
      });
    } else {
      console.log("senha nao identica");
    }
  }, [city, country, email, password, setData, username, verifyPassword]);

  return (
    <>
      <Box
        cursor="pointer"
        w="100%"
        justifyContent="start"
        fontSize="1.5rem"
        pb="1rem"
      >
        <AiOutlineArrowLeft onClick={onBack} />
      </Box>
      <form>
        <VStack w="100%" justify="center" align="center">
          <Input
            type="text"
            variant="flushed"
            placeholder="Usuário"
            size="lg"
            onChange={({ target }: { target: HTMLInputElement }) => {
              getInputValue(target.value, setUsername);
            }}
          />
          <Input
            type="email"
            variant="flushed"
            placeholder="Email"
            size="lg"
            onChange={({ target }: { target: HTMLInputElement }) => {
              getInputValue(target.value, setEmail);
            }}
          />
          <Input
            type="text"
            variant="flushed"
            placeholder="Cidade"
            size="lg"
            onChange={({ target }: { target: HTMLInputElement }) => {
              getInputValue(target.value, setCity);
            }}
          />
          <Input
            type="email"
            variant="flushed"
            placeholder="País"
            size="lg"
            onChange={({ target }: { target: HTMLInputElement }) => {
              getInputValue(target.value, setCountry);
            }}
          />
          <Input
            type="password"
            variant="flushed"
            placeholder="Senha"
            size="lg"
            onChange={onChangeVerifyPassword}
          />
          <Input
            type="password"
            variant="flushed"
            placeholder="Repetir Senha"
            size="lg"
            onChange={({ target }: { target: HTMLInputElement }) => {
              getInputValue(target.value, setPassword);
            }}
            onBlur={onBlur}
          />
        </VStack>
      </form>
    </>
  );
};

export default memo(SignUp);
