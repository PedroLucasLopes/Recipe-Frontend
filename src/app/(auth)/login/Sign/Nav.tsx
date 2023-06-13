import instance from "@/app/api/instance";
import Button from "@/app/components/Button/Button";
import { useCallback } from "react";

interface IProps extends ISignPanels {
  step: number;
}

const Nav: React.FC<IProps> = ({ data, step, setData, setStep }) => {
  const { signIn, signUp } = data;

  const onSignIn = useCallback(() => {
    const url = "/login";
    instance
      .post(url, signIn)
      .then(({ data }) =>
        localStorage.setItem("@Token:User", data.access_token)
      );
  }, [signIn]);

  const onSignUp = useCallback(() => {}, []);

  return step === 1 ? (
    <Button type="button" size="lg" onClick={onSignIn}>
      Login
    </Button>
  ) : (
    <Button type="button" size="lg" onClick={onSignUp}>
      Cadastrar
    </Button>
  );
};

export default Nav;
