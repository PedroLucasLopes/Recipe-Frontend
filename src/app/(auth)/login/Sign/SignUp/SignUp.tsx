import Input from "@/app/components/Input/Input";
import { VStack } from "@chakra-ui/react";
import { useCallback, useState, memo } from "react";

const SignUp: React.FC<ISignPanels> = ({ data, setData, setStep }) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeUser = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setUsername(target.value);
    },
    []
  );
  const onChangeEmail = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setEmail(target.value);
    },
    []
  );
  const onChangeCity = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setCity(target.value);
    },
    []
  );
  const onChangeCountry = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setCountry(target.value);
    },
    []
  );
  const onChangeVerifyPassword = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setVerifyPassword(target.value);
    },
    []
  );
  const onChangePassword = useCallback(
    ({ target }: { target: HTMLInputElement }) => {
      setPassword(target.value);
    },
    []
  );
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
    <form>
      <VStack w="100%" justify="center" align="center">
        <Input
          type="text"
          variant="flushed"
          placeholder="Usuário"
          size="lg"
          onChange={onChangeUser}
        />
        <Input
          type="email"
          variant="flushed"
          placeholder="Email"
          size="lg"
          onChange={onChangeEmail}
        />
        <Input
          type="text"
          variant="flushed"
          placeholder="Cidade"
          size="lg"
          onChange={onChangeCity}
        />
        <Input
          type="email"
          variant="flushed"
          placeholder="País"
          size="lg"
          onChange={onChangeCountry}
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
          onChange={onChangePassword}
          onBlur={onBlur}
        />
      </VStack>
    </form>
  );
};

export default memo(SignUp);
