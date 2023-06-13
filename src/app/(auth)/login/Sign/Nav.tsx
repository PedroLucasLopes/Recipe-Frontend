import instance from "@/app/api/instance";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { memo } from "react";

interface IProps extends ISignPanels {
  step: number;
}

const Nav: React.FC<IProps> = ({ data, step, setData, setStep }) => {
  const { signIn, signUp } = data;
  const navigate = useRouter();

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
    const url = "/login";
    instance
      .post(url, signIn)
      .then(({ data }) =>
        localStorage.setItem("@Token:User", data.access_token)
      );
  }, [signIn]);

  const onSignUp = useCallback(() => {
    const body = getBody();
    const url = "/users";
    instance.post(url, body).then(({ data }) => setStep(1));
  }, [getBody, setStep]);

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

export default memo(Nav);
