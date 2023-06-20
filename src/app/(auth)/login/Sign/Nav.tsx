import instance from "@/app/api/instance";
import Button from "@/app/components/Button/Button";
import { useCallback, useState } from "react";
import { memo } from "react";

interface IProps extends ISignPanels {
  step: number;
}

const Nav: React.FC<IProps> = ({ data, step, setData, setStep }) => {
  const { signIn, signUp } = data;
  const [loading, setLoading] = useState(false);

  const getBody = useCallback(() => {
    const concatData = Object.assign(signIn, signUp);
    return {
      user_email: concatData.email,
      user_password: concatData.password,
      user_username: concatData.username,
      user_city: concatData.city,
      user_country: concatData.country,
    };
  }, [signIn, signUp]);

  const onSignIn = useCallback(() => {
    try {
      setLoading(true);
      const url = "/login";
      instance.post(url, signIn).then(({ data }) => {
        localStorage.setItem("@Token:User", data.access_token);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [signIn]);

  const onSignUp = useCallback(() => {
    try {
      setLoading(true);
      const url = "/users";
      const body = getBody();
      instance.post(url, body).then(() => {
        setStep(1);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [getBody, setStep]);

  return step === 1 ? (
    <Button
      colorScheme="orange"
      type="button"
      mt="2rem"
      w="100%"
      size="lg"
      onClick={onSignIn}
      loadingText="Entrando"
      isLoading={loading}
    >
      Login
    </Button>
  ) : (
    <Button
      colorScheme="orange"
      mt="2rem"
      w="100%"
      type="button"
      size="lg"
      onClick={onSignUp}
      loadingText="Finalizando"
      isLoading={loading}
    >
      Cadastrar
    </Button>
  );
};

export default memo(Nav);
