import { useMemo } from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

interface IProps extends ISignPanels {
  step: number;
}

const Signs: React.FC<ISignPanels>[] = [SignIn, SignUp];

const Sign: React.FC<IProps> = ({ step, data, setStep, setData }) => {
  const Panel = useMemo(() => Signs[step - 1] || (() => <></>), [step]);
  return <Panel setData={setData} setStep={setStep} data={data} />;
};

export default Sign;
